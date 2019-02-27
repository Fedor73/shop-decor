// ====================
// Project:
// 26-10-2018: FedorVinecky
// ---------------------
// описание скрипта
// ====================

$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});



$('.b-navigation__item--first').click(function () {
    $('#accordion').show();
});


$(document).mouseup(function (e) {
    var container = $("#accordion");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});