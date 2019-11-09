import {Selector} from 'testcafe';

fixture `Sample E2E Test`
    .page `http://localhost:8080`;

test('message is displayed', async t => {
    await t
        .expect(Selector('h1').innerText).eql('Hello, World');
});