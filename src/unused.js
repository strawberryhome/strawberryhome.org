/* eslint-disable no-unused-vars */
// Some unused code that may one day be useful some other way

const resizeWsrv = (url, maxWidth) => `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${maxWidth}`;

const specialRedirectPrefix = "https://commons.wikimedia.org/wiki/Special:Redirect/file/";

function testImage(url) {
    const img = new Promise(function test(resolve, reject) {
        const element = new Image();
        element.addEventListener("load", () => {
            resolve(true, url);
        });
        element.addEventListener("error", () => {
            resolve(false, url);
        });
        // Assign URL
        element.src = url;
    });
    return img;
}

const getHeight = function() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight,
        window.innerHeight,
        // window.outerHeight,
    );
};
const possibleHeights = [720, 900, 1080, 1152, 1440, 1800, 2304];
const height = getHeight();
const desiredHeight = possibleHeights.find((n) => n >= height) || 2304;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
