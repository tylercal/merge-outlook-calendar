/* global console */

(function() {
    "use strict";

    var observer = new MutationObserver(merge);

    function merge() {
        var merge = document.getElementsByClassName("ms-Icon--merge")[0];
        console.log(merge);
        if (merge !== undefined) {
            merge.click();
            observer.disconnect();
        }
    }

    observer.observe(document, {childList: true, subtree: true} );

    merge();

})();