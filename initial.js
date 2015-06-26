(function ($) {
    $.fn.initial = function (firstName, lastName) {

        return this.each(function () {

            var el = $(this);
            var settings = $.extend({
                firstName: firstName,
                lastName: lastName
            });

            // making the text object
            var initials = settings.firstName.charAt(0).toUpperCase() + settings.lastName.charAt(0).toUpperCase();
            var initialsObj = $('<text text-anchor="middle"></text>').attr({
                'y': '50%',
                'x': '50%',
                'dy' : '0.35em',
                'pointer-events':'auto',
                'fill': '#ffffff'
            }).html(initials).css({
                'font-family': 'Roboto, sans-serif',
                'font-weight': 300,
                'font-size': '40px'
            });

            var initialsSVG = $('<svg></svg>').attr({
                'xmlns': 'http://www.w3.org/2000/svg',
                'pointer-events':'none',
                'width': 100,
                'height': 100
            }).css({
                'background-color': '#00AF66',
                'width': '100px',
                'height': '100px'
            });

            initialsSVG.append(initialsObj);
            var initialsHtml = window.btoa(unescape(encodeURIComponent($('<div>').append(initialsSVG.clone()).html())));

            el.attr("src", 'data:image/svg+xml;base64,' + initialsHtml);
        })
    };

}(jQuery));