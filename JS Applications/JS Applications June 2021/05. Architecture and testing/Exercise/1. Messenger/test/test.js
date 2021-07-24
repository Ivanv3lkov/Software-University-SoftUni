const {chromium} = require('playwright-chromium');
const {assert} = require('chai');
let browser;
let page;

let clientUrl = `http://localhost:3000`;
let serverEndPoint = '**/jsonstore/messenger'
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
        content: 'blabla'
    },
    2: {
        author: 'Ivan',
        content: 'durabura'
    },
};
const testMsg = {
    author: 'Stamat',
    content: 'durabura'
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

    describe('test store message', () => {
        it('should test server respond', async () => {
            await page.route(`${serverEndPoint}`, (route, response) => {
                route.fulfill(fakeResponse(fakeServerData));
                assert.strictEqual(response.method(), 'GET');
            });

            await page.goto(clientUrl);

            const [response] = await Promise.all([
                page.waitForResponse(`${serverEndPoint}`),
                page.click('#refresh')
            ]);

            let result = await response.json();
            assert.deepEqual(result, fakeServerData);
        });

        it('should test dom element', async () => {
            await page.route(`${serverEndPoint}`, (route, response) => {
                route.fulfill(fakeResponse(fakeServerData));
                assert.strictEqual(response.method(), 'GET');
            });

            await page.goto(clientUrl);

             await Promise.all([
                page.waitForResponse(`${serverEndPoint}`),
                page.click('#refresh')
            ]);

            const body = await page.$('#main');
            assert.strictEqual(await body.$$eval('#messages', e => e.map(n => n.value).join(''))
                , Object.values(fakeServerData).map(e => `${e.author}: ${e.content}`).join('\n'));

        });
    });
    describe('test request', () => {

        it('should test server post success', async () => {
            let serverRespondData = undefined;
            await page.route(`${serverEndPoint}`, (route, request) => {
                assert.strictEqual(request.method(), 'POST');
                serverRespondData = request.postData();
                route.fulfill(fakeResponse(fakeServerData));
            });

            await page.goto(clientUrl);


            await page.fill('#author', 'Stamat')
            await page.fill('#content', 'durabura')

            await Promise.all([
                page.waitForResponse(`${serverEndPoint}`),
                page.click('#submit')
            ]);

            assert.deepEqual(JSON.parse(serverRespondData), testMsg)
        });

        it('should test fields empty', async () => {
            let serverRespondData = undefined;
            await page.route(`${serverEndPoint}`, (route, request) => {
                assert.strictEqual(request.method(), 'POST');
                serverRespondData = request.postData();
                route.fulfill(fakeResponse(fakeServerData));
            });

            await page.goto(clientUrl);

            await page.fill('#author', 'Stamat')
            await page.fill('#content', 'durabura')

            await Promise.all([
                page.waitForResponse(`${serverEndPoint}`),
                page.click('#submit')
            ]);

            const body = await page.$('#main');
            assert.strictEqual(await body.$eval('#author', e => e.textContent),'');
            assert.strictEqual( await body.$eval('#content', e => e.textContent),'');
        });
    });

});

