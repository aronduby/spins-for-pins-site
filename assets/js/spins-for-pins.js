document.addEventListener('DOMContentLoaded', function() {
    const isChrome = /chrome|crios|crmo/i.test(navigator.userAgent);
    const isFirefox = /firefox|iceweasel|fxios/i.test(navigator.userAgent);
    const isSupported = isChrome || isFirefox;

    document.querySelectorAll('.extensionLink').forEach(el => {
       if (!isSupported) {
           el.textContent = 'Not supported';
       } else {
            el.href = isChrome ? CHROME_URL : FIREFOX_URL;
            el.classList.add(`extensionLink--enabled`);
       }
    });

});