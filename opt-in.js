(function ($) {
    "use strict";

    var $document = $(document);

    $document.on('ready', function (e) {
        // https://github.com/ftlabs/fastclick
        if (typeof FastClick !== 'undefined') {
            FastClick.attach(document.body);
        }
        // https://code.google.com/p/hyphenator/
        if (typeof Hyphenator_Loader !== 'undefined' || typeof Hyphenator !== 'undefined') {
            var $html = $('html');

            var langs = {};
            $('[lang]').attr('lang', function (index, lang) {
                // FIXME find a way to get the word required
                langs[lang] = "donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft";
            });

            var config = {};
            $.each($html.data(), function (key, value) {
                if (key.match(/^hyphenator/) && key !== 'hyphenatorPath') {
                    config[key.substr(10).toLowerCase()] = value;
                }
            });

            if (typeof Hyphenator_Loader !== 'undefined') {
                var path = $html.data('hyphenator-path');
                if (!path) {
                    alert('data-hyphenator-path not specified')
                }
                Hyphenator_Loader.init(langs, path, config);
            } else if (typeof Hyphenator !== 'undefined') {
                Hyphenator.config(config);
                Hyphenator.run();
            }
        }
    });

    $document.on('ready update', function (e) {
        var $target = $(e.target);

        // http://getbootstrap.com/
        if ($.isFunction($.fn.tooltip)) {
            $target.find('[data-toggle=tooltip]').tooltip();
        }
        if ($.isFunction($.fn.popover)) {
            $target.find('[data-toggle=popover]').popover();
        }

        // https://github.com/seiyria/bootstrap-slider
        if ($.isFunction($.fn.slider)) {
            $target.find('[data-role=slider]').each(function () {
                var $element = $(this);
                var attr = {
                    'min': parseFloat($element.attr('min')),
                    'max': parseFloat($element.attr('max')),
                    'step': parseFloat($element.attr('step')),
                    'value': parseFloat($element.val())
                };
                $element.slider($.extend(attr, $element.data()))
            });
        }
    });

})(jQuery);