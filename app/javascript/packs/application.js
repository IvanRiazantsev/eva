require("@rails/ujs").start()
// require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

var jQuery = require("jquery");

global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

import 'bootstrap'
import './jquery.easing.min'
import Splide from "@splidejs/splide";

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
    import('./scripts')
    new Splide('#image-slider', {
        type: 'loop',
        pagination: false,
        classes: {
            arrow: 'splide__arrow splide__custom_array_color'
        }
    }).mount();

    $('li.dropdown a.dropdown-item').click(function () {
        $(this).parent().dropdown('hide')
    })
})


// document.addEventListener("turbolinks:load", () => {
//     $('[data-toggle="tooltip"]').tooltip()
//     import('./scripts')
// });

import "@fortawesome/fontawesome-free/js/all";


