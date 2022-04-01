/**
 * manchakkay - Hide Header on scroll
 * 
 * Usage: hideHeader.init(timeout, selector, height, height_func)
 * timeout(ms), selector(str), height(int+px), height_func(eval_str_func+px)
 */
var hideHeader = {
    data: {
        settings: {
            timeout: 0,
            selector: ".header__wrapper",
            height: "auto",
            height_func: 'getComputedStyle(document.querySelector("html")).getPropertyValue("--cell")',
        },
        scroll: {
            prev: 0,
            now: 0,
        },
        timer: null,
        header: null,
        height_value: null,
    },
    init: function (timeout, selector, height, height_func) {
        // Initialize variables
        hideHeader.data.scroll.prev = window.pageYOffset;
        hideHeader.data.timer = null;

        // Initialize event listeners
        document.addEventListener('scroll', hideHeader.handle);
        document.addEventListener('resize', hideHeader.handle);

        // Setting values
        if (timeout != undefined && timeout != null && !isNaN(timeout))
            hideHeader.data.settings.timeout = timeout;

        if (selector != undefined && selector != null)
            hideHeader.data.settings.selector = selector.toString();

        if (height != undefined && height != null)
            hideHeader.data.settings.height = height;

        if (height == "auto" && height_func != undefined && height_func != null)
            hideHeader.data.settings.height_func = height_func;

    },
    handle: function () {
        // Update pos and header object
        hideHeader.data.scroll.now = window.pageYOffset;
        hideHeader.data.header = document.querySelector(hideHeader.data.settings.selector);
        hideHeader.data.header.style.transition = "top 0.6s ease-in-out";

        // Checking header object and scroll position
        if ((hideHeader.data.header != undefined && hideHeader.data.header != null && hideHeader.data.scroll.prev > hideHeader.data.scroll.now && hideHeader.data.scroll.prev > 0) || (hideHeader.data.scroll.now == 0)) {
            hideHeader.show();
        } else {
            hideHeader.hide();

            // Checking timeout definition
            if (!isNaN(hideHeader.data.settings.timeout) && hideHeader.data.settings.timeout > 0) {
                // Restart timeout
                clearTimeout(hideHeader.data.timer);
                hideHeader.data.timer = setTimeout(hideHeader.show, hideHeader.data.settings.timeout);
            }

        }

        hideHeader.data.scroll.prev = hideHeader.data.scroll.now;
    },
    show: function () {
        // Show header
        hideHeader.data.header.style.top = "0";
    },
    hide: function () {
        // Hide header
        if (hideHeader.data.settings.height == "auto") {
            hideHeader.data.height_value = eval(hideHeader.data.settings.height_func);
        } else {
            hideHeader.data.height_value = hideHeader.data.settings.height;
        }

        hideHeader.data.header.style.top = "-" + hideHeader.data.height_value;
    }
}