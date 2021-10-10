/* eslint-disable multiline-comment-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-escape */
/* eslint-disable require-unicode-regexp */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
console.log('Sample JavaScript #7 HW #21');

function replaceCSSComments(inputString) {
    return inputString.replace(/\/\*.*?\*\/\s?/g,'').trim();
}


function replaceHTMLComments(inputString) {
    return inputString.replace(/\<\!\-\-*.*?\-\-\>\s*/g, '').trim();
}


function validateFileType(inputString) {
     return /\.(jpg|png|jpeg)$/i.test(inputString);
}


function checkYear(inputString) {
    return (/^(19\d\d|20\d\d|2100)$/).test(inputString);
}


function checkEmail(email) {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
}


function checkDomainUrl(url) {
    return (/^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/).test(url);
}


function createLinksFromDomains(url) {
    var reg = new RegExp('(http:|https:)\\/\\/(?!:\\/\\/)([a-zA-Z0-9-_]+\\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\\.[a-zA-Z]{2,5}', 'gi');
    url.match(reg).forEach(item => {
        return url = url.replace(item, `<a href="${item}" target="_blank">${item.replace(/^(http:|https:)\/\//gi, '')}</a>`);
    });
    return url;
}
