const { chromium } = require('playwright-chromium');
const { test, expect } = require('@playwright/test');

let browser, page; // Declare reusable variables
let clientUrl = 'http://127.0.0.1:5500/01.Messenger/'

function fakeResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
}

let testMessages = {
    1: {
        author: 'Pesho',
        content: 'My message'
    },
    2: {
        author: 'George',
        content: 'My george message'
    }
}

let testMessages2 = {
    1: {
        author: 'Gosho',
        content: 'Gosho message'
    },
    2: {
        author: 'Anna',
        content: 'How are you'
    }
}

let testCreateMessage = {
    3: {
        author: 'Ivan',
        content: 'Ivan message',
        _id: 3
    }
}

test.describe('E2E tests', function () {
    test.beforeAll(async () => { 
        // browser = await chromium.launch( { headless: false, slowMo: 1000}); 
        browser = await chromium.launch(); 
    });
    test.afterAll(async () => { await browser.close(); });

    test.describe('load messages', () => {
        test('should show data in text area', async ({page}) => {
            await page.route('**/jsonstore/messenger', route => {
                route.fulfill(fakeResponse(testMessages2))
            });

            await page.goto(clientUrl);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh')
            ]);
            
            const textArea = await page.$('#messages');

            expect(await textArea.screenshot()).toMatchSnapshot('loadBooks.png');
        });
    })
});
