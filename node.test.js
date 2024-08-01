import { JSDOM } from 'jsdom';
import { X } from './X.js';

// Create a JSDOM instance
const dom = new JSDOM(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Widget Library Test</title>
    </head>
    <body>
        <div id="root">
            <div widget="a">
                <div widget="b"></div>
            </div>
            <div></div>
            <div widget="c"></div>
        </div>
        <div id="info"></div>
    </body>
    </html>
`, { runScripts: "dangerously" });

// Get the window and document from JSDOM
const { window } = dom;
const { document } = window;

// Initialize widgets
X.init(document.getElementById('root'), (error) => {
    const info = document.getElementById('info');
    if (error) {
        info.textContent = `Initialization failed: ${error.message}`;
        console.error(error);
    } else {
        info.textContent = 'Initialization succeeded';
        console.log('Initialization succeeded');
    }

    // Output the HTML for verification
    console.log(dom.serialize());
});

// Destroy widgets after some time
setTimeout(() => {
    X.destroy(document.getElementById('root'));
    console.log('Destroyed');
    console.log(dom.serialize());
}, 5000);
