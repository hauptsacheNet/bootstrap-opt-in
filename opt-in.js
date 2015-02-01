(function ($) {
    "use strict";

    var $document = $(document);

    $document.on('ready', function (e) {
        if (typeof FastClick !== 'undefined') {
            FastClick.attach(document.body);
        }
    });

    $document.on('ready update', function (e) {
        var $target = $(e.target);

        if ($.isFunction($.fn.tooltip)) {
            $target.find('[data-toggle=tooltip]').tooltip();
        }
        if ($.isFunction($.fn.popover)) {
            $target.find('[data-toggle=popover]').popover();
        }
    });

})(jQuery);