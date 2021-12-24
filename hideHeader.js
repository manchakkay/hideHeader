/**
 * Alfa Digest - Hide Header on scroll
 * 
 * Usage: AD_HideHeader.init(timeout, selector)
 * timeout(ms), selector(str)
 */
var AD_HideHeader = {
    data: {
        settings: {
            timeout: 2000,
            selector: ".header__wrapper"
        },
        scroll: {
            prev: 0,
            now: 0,
        },
        timer: null,
        header: null,
    },
    init: function (timeout, selector) {
        // Initialize variables
        AD_HideHeader.data.scroll.prev = window.pageYOffset;
        AD_HideHeader.data.timer = null;

        // Initialize event listeners
        document.addEventListener('scroll', AD_HideHeader.handle);
        document.addEventListener('resize', AD_HideHeader.handle);

        // Setting values
        if (timeout != undefined && timeout != null && !isNaN(timeout))
            AD_HideHeader.data.settings.timeout = timeout;

        if (selector != undefined && selector != null)
            AD_HideHeader.data.settings.selector = selector.toString();
    },
    handle: function () {
        // Update pos and header object
        AD_HideHeader.data.scroll.now = window.pageYOffset;
        AD_HideHeader.data.header = document.querySelector(AD_HideHeader.data.settings.selector);

        // Checking header object and scroll position
        if (AD_HideHeader.data.header != undefined && AD_HideHeader.data.header != null && AD_HideHeader.data.scroll.prev > AD_HideHeader.data.scroll.now) {
            AD_HideHeader.show();
        } else {
            AD_HideHeader.hide();

            // Checking timeout definition
            if (!isNaN(AD_HideHeader.data.settings.timeout) && AD_HideHeader.data.settings.timeout > 0) {
                // Restart timeout
                clearTimeout(AD_HideHeader.data.timer);
                AD_HideHeader.data.timer = setTimeout(AD_HideHeader.show, AD_HideHeader.data.settings.timeout);
            }

        }

        AD_HideHeader.data.scroll.prev = AD_HideHeader.data.scroll.now;
    },
    show: function () {
        // Show header
        AD_HideHeader.data.header.style.top = "0";
    },
    hide: function () {
        // Hide header
        AD_HideHeader.data.header.style.top = "-" + getComputedStyle(document.querySelector("html")).getPropertyValue('--cell');
    }
}