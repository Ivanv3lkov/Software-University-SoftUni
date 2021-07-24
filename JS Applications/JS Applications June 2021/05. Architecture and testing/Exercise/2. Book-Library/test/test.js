const {chromium} = require('playwright-chromium');
const {assert} = require('chai');
let browser;
let page;

let clientUrl = `http://localhost:3000`;
let serverEndPoint = '**/jsonstore/collections/books'
const fakeResponse = (data) => {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
}

const fakeServerData = {
    1: {
        author: 'Pesho Peshev',
        title: 'blabla'
    },
    2: {
        author: 'Ivan',
        title: 'durabura'
    },
};

describe('Test messenger app', function () {
    this.timeout(10000);

    before(async function () {
        browser = await chromium.launch({headless: false, slowMo: 1000});
    });
    after(async function () {
        browser = await browser.close();
    });

    beforeEach(async function () {
        page = await browser.newPage();
    })
    afterEach(async function () {
        page = page.close();
    })

    describe('test load books', () => {
        it('should test server respond', async () => {
            await page.route(`${serverEndPoint}`, (route, response) => {
                route.fulfill(fakeResponse(fakeServerData));
            });

            await page.goto(clientUrl);

            const [response] = await Promise.all([
                page.waitForResponse(`${serverEndPoint}`),
                page.click('#loadBooks')
            ]);

            let result = await response.json();
            assert.deepEqual(result, fakeServerData);
        });

        it('should test dom element', async () => {
            await page.route(`${serverEndPoint}`, (route, response) => {
                route.fulfill(fakeResponse(fakeServerData));
            });

            await page.goto(clientUrl);

            await Promise.all([
                page.waitForResponse(`${serverEndPoint}`),
                page.click('#loadBooks')
            ]);
            await page.$('tbody');
            // const data = await page.evaluate(() => {
            //     const tds = Array.from(document.querySelectorAll('tbody tr td'))
            //     return tds.map(td => td.innerText)
            // });
            const data = await page.$$eval('tbody tr td', tds => tds.map((td) => {
                return td.innerText;
            }));
            assert.deepEqual(data, ["blabla", "Pesho Peshev", "Edit Delete", "durabura", "Ivan", "Edit Delete"])
        });
    });
    describe('test edit', () => {

        it('should test edit -> server respond, formEdit', async () => {
            await page.route(`${serverEndPoint}`, (route, response) => {
                route.fulfill(fakeResponse(fakeServerData));
            });

            await page.goto(clientUrl);

            await Promise.all([
                page.waitForResponse(`${serverEndPoint}`),
                page.click('#loadBooks')
            ]);
            await page.$('tbody');

            let fakeData = {author: 'changedAuthor', title: 'changedTitle'};
            let serverRespondData = undefined;
            await page.route(`${serverEndPoint}/**`, (route, request) => {
                serverRespondData = request.postData();
                route.fulfill(fakeResponse(fakeData));
            });


            let [btn, editForm] = await Promise.all([
                await page.click('tr[data-id="1"] button.editBtn'),
                page.isVisible("form#editForm"),
            ]);

            assert.isTrue(editForm)

            await page.click('text=Save');

            const body = await page.$('form#editForm');
            assert.strictEqual(await body.$eval('input[name=title]', e => e.textContent),'');
            assert.strictEqual( await body.$eval('input[name=author]', e => e.textContent),'');

            assert.deepEqual(JSON.parse(serverRespondData), fakeData)
        });


    });
    describe('test Delete', () => {

        it('should test server respond delete', async () => {
            await page.route(`${serverEndPoint}`, (route, request) => {
                route.fulfill(fakeResponse(fakeServerData));

            });

            await page.goto(clientUrl);

            await Promise.all([
                page.waitForResponse(`${serverEndPoint}`),
                page.click('#loadBooks')
            ]);
            await page.$('tbody');

            let    serverRespondData = undefined
            await page.route(`${serverEndPoint}/1`, (route, request) => {
                assert.strictEqual(request.method(),'DELETE');
                serverRespondData = request.postData()
                route.fulfill(fakeResponse({
                    status: 200,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                }));
            });

            page.on("dialog", (dialog) => {
                dialog.accept();
            });

            await page.click('tr[data-id="1"] button.deleteBtn');
            assert.deepEqual(JSON.parse(serverRespondData), 'fakeData')
        });

    });
    describe('test create', () => {

        it('should test server post success', async () => {
            let serverRespondData = undefined;
            await page.route(`${serverEndPoint}`, (route, request) => {
                assert.strictEqual(request.method(), 'POST');
                serverRespondData = request.postData();
                route.fulfill(fakeResponse(fakeServerData));
            });

            await page.goto(clientUrl);
            let respond =await page.isVisible("form#createForm")
            assert.isTrue(respond);

            await page.fill('input[name=author]', 'Author')
            await page.fill('input[name=title]', 'durabura')

            await Promise.all([
                page.waitForResponse(`${serverEndPoint}`),
                await page.click('text=Submit')
            ]);

            assert.deepEqual(JSON.parse(serverRespondData), { title: 'durabura', author: 'Author' });

            const body = await page.$('form#createForm');
            assert.strictEqual(await body.$eval('input[name=title]', e => e.textContent),'');
            assert.strictEqual( await body.$eval('input[name=author]', e => e.textContent),'');
        });

    });
});

