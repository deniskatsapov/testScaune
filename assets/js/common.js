function changeLangue(obj) {
    window.location.href = obj.getAttribute('data-link');
}

$(".all-category").on("click", (function () {
    $(this).toggleClass("active"), $(".all-category-menu-wrapper").toggle("blind")
})), $(".all-category-mobile").on("click", (function () {
    $(this).toggleClass("active"), $(".mobile-menu").toggle("blind")
})), $(".mobile-menu__close").on("click", (function () {
    $(this).toggleClass("active"), $(".mobile-menu").toggle("blind"), $(".all-category-mobile").toggleClass("active")
})), $(".filters-btn").on("click", (function () {
    $(this).toggleClass("active"), $(".catalog-filter-mobile").toggle("blind")
})),$(".catalog-filter-mobile__close-btn").on("click", (function () {
    $(".filters-btn").click()
})),
//     $(".filter-results-btn").on("click", (function (e) {
//     getFilter(e)
// })), 
jQuery(e => {
    e("#pickup-link").on("click", () => {
        0 == !e(".tabs__link_active").length ? e("#bank-card-courier-link").addClass("tabs__link-hide") : console.log("Нет элемента!")
    }), e("#express-delivery-link").on("click", () => {
        0 == !e(".tabs__link_active").length ? e("#bank-card-courier-link").removeClass("tabs__link-hide") : console.log("Нет элемента!")
    })
}),
    $("#tables").on("click", (function () {
    $(".all-category-menu__btn").removeClass("active"),
        $(".all-category-menu__subcategory-item").removeClass("active"),
        $(this).toggleClass("active"),
        $("#tables-list").toggleClass("active")
})),
    $("#chairs").on("click", (function () {
    $(".all-category-menu__btn").removeClass("active"),
        $(".all-category-menu__subcategory-item").removeClass("active"),
        $(this).toggleClass("active"),
        $("#chairs-list").toggleClass("active")
}));

const cards = document.querySelectorAll(".card");
document.documentElement.clientWidth < 992 && [...cards].map(e => e.classList.add("card--liders")), window.addEventListener("resize", () => {
    document.documentElement.clientWidth < 992 ? [...cards].map(e => {
        !e.classList.contains("card--liders") && e.classList.add("card--liders")
    }) : [...cards].map(e => {
        e.classList.contains("card--liders") && e.classList.remove("card--liders")
    })
}), $(document).ready((function () {
    setTimeout(function(){
        $(".categories-list-mobile").slick({
            slidesToShow: 10,
            slidesToScroll: 1,
            arrows: !1,
            fade: !1,
            vertical: !1,
            touchThreshold: 100,
            variableWidth: !0,
            responsive: [{
                breakpoint: 1200,
                settings: {slidesToShow: 9.5, slidesToScroll: 1, infinite: !1, dots: !1}
            }, {breakpoint: 1024, settings: {slidesToShow: 1, slidesToScroll: 1}}, {
                breakpoint: 575,
                settings: {arrows: !1, slidesToShow: 3, slidesToScroll: 1}
            }]
        });
        $(".product__slider-main").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            fade: !0,
            asNavFor: ".product__slider-nav",
            vertical: !1
        });
    }, 2000);

        $(".product__slider-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".product__slider-main",
        focusOnSelect: !0,
        arrows: !1,
        vertical: !0,
        adaptiveHeight: !0,
        infinite: !0,
        accessibility: !0
    }), $(".product-info__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: !0,
        arrows: !1,
        dots: !0,
        adaptiveHeight: !0,
        accessibility: !0
    }), $(".analog-offer__products-card-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: !0,
        arrows: !0,
        prevArrow: '<div class="products-card-slider-left"><img src="/assets/img/main/slider-arrow-left.svg" alt="Слайд"></div>',
        nextArrow: '<div class="products-card-slider-right"><img src="/assets/img/main/slider-arrow-right.svg" alt="Слайд"></div>',
        accessibility: !0,
        touchThreshold: 100,
        responsive: [{
            breakpoint: 1024,
            settings: {slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !0}
        }, {breakpoint: 575, settings: {arrows: !1, slidesToShow: 2.4, slidesToScroll: 1}}]
    }), $(".special-offers__products-card-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: !0,
        arrows: !0,
        prevArrow: '<div class="products-card-slider-left"><img src="/assets/img/main/slider-arrow-left.svg" alt="Слайд"></div>',
        nextArrow: '<div class="products-card-slider-right"><img src="/assets/img/main/slider-arrow-right.svg" alt="Слайд"></div>',
        accessibility: !0,
        touchThreshold: 100,
        responsive: [{breakpoint: 1600, settings: {arrows: !1, slidesToShow: 3.4, slidesToScroll: 1}}, {
            breakpoint: 575,
            settings: {arrows: !1, slidesToShow: 1.8, slidesToScroll: 1}
        }]
    }), $(".popular-product__products-card-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: !0,
        arrows: !0,
        prevArrow: '<div class="products-card-slider-left"><img src="/assets/img/main/slider-arrow-left.svg" alt="Слайд"></div>',
        nextArrow: '<div class="products-card-slider-right"><img src="/assets/img/main/slider-arrow-right.svg" alt="Слайд"></div>',
        accessibility: !0,
        touchThreshold: 100,
        responsive: [{breakpoint: 1300, settings: {arrows: !1, slidesToShow: 4, slidesToScroll: 1}}, {
            breakpoint: 900,
            settings: {arrows: !1, slidesToShow: 3, slidesToScroll: 1}
        }, {breakpoint: 700, settings: {arrows: !1, slidesToShow: 1.8, slidesToScroll: 1}}]
    }), $(".instagram-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: !0,
        arrows: !1,
        accessibility: !0,
        touchThreshold: 100,
        responsive: [{breakpoint: 1250, settings: {arrows: !1, slidesToShow: 4, slidesToScroll: 1}}, {
            breakpoint: 1024,
            settings: {arrows: !1, slidesToShow: 3.1, slidesToScroll: 1}
        }, {breakpoint: 575, settings: {arrows: !1, slidesToShow: 3.1, slidesToScroll: 1}}]
    }), $(".subcategory-menu__list").slick({
        slidesToShow: 3.05,
        slidesToScroll: 1,
        focusOnSelect: !0,
        arrows: !0,
        prevArrow: '<div class="subcategory-menu__list-slider-left"><img src="/assets/img/main/category-arrow.svg" alt="Слайд"></div>',
        nextArrow: '<div class="subcategory-menu__list-slider-right"><img src="/assets/img/main/category-arrow.svg" alt="Слайд"></div>',
        accessibility: !0,
        touchThreshold: 100,
        infinite: !1,
        responsive: [{breakpoint: 1032, settings: {arrows: !1, slidesToShow: 3.2, slidesToScroll: 1}}, {
            breakpoint: 767,
            settings: {arrows: !1, slidesToShow: 2.2, slidesToScroll: 1}
        }, {breakpoint: 575, settings: {arrows: !1, slidesToShow: 1.2, slidesToScroll: 1}}]
    })
})), $(".blog__list").masonry({
    itemSelector: ".blog__item",
    horizontalOrder: !0,
    gutter: ".blog__sizer",
    horizontalOrder: !0,
    columnWidth: ".blog__item",
    percentPosition: !0
}), $(".nav-wrapp__item").hover((function (e) {
    e.preventDefault(), $(".news-body-tab").removeClass("news-body-tab--active"), $(".nav-wrapp__item").removeClass("tab_active"), $($(this).attr("href")).addClass("news-body-tab--active"), $(this).addClass("tab_active")
}));
const select = document.querySelectorAll(".select");
select.length && select.forEach(e => {
    const s = e.querySelector(".select__current");
    e.addEventListener("click", t => {
        const l = t.target.dataset.choice, i = t.target.innerText;
        "choosen" === l && s.innerText !== i && (s.innerText = i), e.classList.toggle("is-active")
    })
}), $(".hamburger").click((function (e) {
    $(".hamburger").toggleClass("hamburger__active"), $(".mobile__menu ").toggleClass("mobile__menu__active")
}));
const accordeon = {CLASS: "accordion", CLASS_ACTIVE: "accordion__active"},
    acc = document.querySelectorAll("." + accordeon.CLASS);
let openedAccordeon = null;

function closeAccordeon(e) {
    e.nextElementSibling.style.maxHeight = 0, e.classList.remove(accordeon.CLASS_ACTIVE)
}

function openAccordeon(e) {
    e.nextElementSibling.style.maxHeight = e.nextElementSibling.scrollHeight + "px", e.classList.add(accordeon.CLASS_ACTIVE)
}

function isAccordeonOpen(e) {
    e.nextElementSibling && e.nextElementSibling.style.maxHeight
}

for (const e of acc) e.addEventListener("click", (function () {
    const e = this;
    openedAccordeon && closeAccordeon(openedAccordeon), isAccordeonOpen(e) ? closeAccordeon(e) : (openAccordeon(e), openedAccordeon = e)
}));
const accordionList = document.getElementsByClassName("accordion--multiple"), classNameActive = "accordion--active";
for (const e of accordionList) e.addEventListener("click", (function () {
    this.classList.toggle(classNameActive);
    const e = this.nextElementSibling;
    if (e){
        e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + "px"
    }
}));
$("body").on("click", ".password-control", (function () {
    return "password" == $("#password-input").attr("type") ? ($(this).addClass("view"), $("#password-input").attr("type", "text")) : ($(this).removeClass("view"), $("#password-input").attr("type", "password")), !1
})), $("body").on("click", ".password-control2", (function () {
    return "password" == $("#password-input2").attr("type") ? ($(this).addClass("view"), $("#password-input2").attr("type", "text")) : ($(this).removeClass("view"), $("#password-input2").attr("type", "password")), !1
})), function () {
    var e, s, t, l, i, r, a = document.querySelectorAll(".yt-lazyload");
    0 < a.length && (s = document.createElement("div"), t = document.createElement("div"), l = document.createElement("div"), i = document.createElement("a"), r = document.createElement("iframe"), s.classList.add("yt-lazyload-wrap"), t.classList.add("yt-lazyload-content"), l.classList.add("yt-lazyload-playbtn"), i.classList.add("yt-lazyload-logo"), i.target = "_blank", i.rel = "noreferrer", r.setAttribute("allow", "accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"), r.setAttribute("allowfullscreen", ""), e = new IntersectionObserver((function (a) {
        a.forEach((function (a) {
            var o, n, c, d, g, u = a.target, m = a.target.dataset.id, p = a.target.dataset.thumb,
                v = a.target.dataset.logo;
            !0 === a.isIntersecting && (o = s.cloneNode(), u.append(o), n = t.cloneNode(), o.append(n), n.style.setProperty("--yt-lazyload-img", 'url("https://img.youtube.com/vi/' + m + p + '/maxresdefault.jpg")'), c = l.cloneNode(), n.append(c), "0" !== v && ((d = i.cloneNode()).href = "https://youtu.be/" + m, n.append(d)), c.addEventListener("click", (function () {
                (g = r.cloneNode()).src = "https://www.youtube.com/embed/" + m + "?autoplay=1", n.append(g)
            })), e.unobserve(u))
        }))
    }), {rootMargin: "200px 0px"}), a.forEach((function (s) {
        e.observe(s)
    })))
}(),
    $(document).ready((function () {
        var price_min = parseInt($('.range-slider-price-left').prop('min'));
        var price_range_min = parseInt($('.range-slider-price-left').attr('minrange'));
        var price_max = parseInt($('.range-slider-price-left').prop('max'));
        var price_range_max = parseInt($('.range-slider-price-right').attr('maxrange'));
    $(".minus-basket-btn").click((function () {
        var e = $(this).parent(".add-basket-block").find(".sum-count-input"), s = e.val();
        1 != s ? (s--, e.val(s)) : $(this).parents(".product-bottom").removeClass("active")
    })), $(".plus-basket-btn").click((function () {
        var e = $(this).parent(".add-basket-block").find(".sum-count-input");
        e.val(parseInt(e.val()) + 1)
    })), $(".sum-count-input").on("keydown", (function (e) {
        if (1 == e.key.length && e.key.match(/[^0-9'".]/)) return !1
    })), $(".add-basket-btn").click((function () {
        $(this).parent(".product-bottom").addClass("active")
    })),
        $(".range-slider-price").slider({
            min: price_range_min,
            max: price_range_max,
            values: [price_min, price_max],
            range: !0,
            animate: "fast",
            slide: function (e, s) {
                $(".range-slider-price-left").val(s.values[0]), $(".range-slider-price-right").val(s.values[1])
            },
            stop: function (e, s) {
                getFilter(e);
            }
        })
        ,
        $(".range-slider-price-left").val($(".range-slider-price").slider("values", 0)),
        $(".range-slider-price-right").val($(".range-slider-price").slider("values", 1)),
        $(".range-slider-container input").change((function () {
        var e = $(".range-slider-price-left").val().replace(/[^0-9]/g, ""),
            s = $(".range-slider-price").slider("option", "min"), t = $(".range-slider-price").slider("values", 1),
            l = $(".range-slider-price-right").val().replace(/[^0-9]/g, ""),
            i = $(".range-slider-price").slider("option", "max"), r = $(".range-slider-price").slider("values", 0);
        e > t && (e = t), e < s && (e = s), "" == e && (e = 0), l < r && (l = r), l > i && (l = i), "" == l && (l = 0),
            $(".range-slider-price-left").val(e), $(".range-slider-price-right").val(l), e != r && $(".range-slider-price").slider("values", 0, e),
        l != t && $(".range-slider-price").slider("values", 1, l)
    })),
        $(".range-slider-maxload").slider({
        min: 0,
        max: 5e3,
        values: [2e3, 3e3],
        range: !0,
        animate: "fast",
        slide: function (e, s) {
            $(".range-slider-maxload-left").val(s.values[0]), $(".range-slider-maxload-right").val(s.values[1])
        }
    }), $(".range-slider-maxload-left").val($(".range-slider-maxload").slider("values", 0)), $(".range-slider-maxload-right").val($(".range-slider-maxload").slider("values", 1)), $(".range-slider-container input").change((function () {
        var e = $(".range-slider-price-left").val().replace(/[^0-9]/g, ""),
            s = $(".range-slider-maxload").slider("option", "min"), t = $(".range-slider-maxload").slider("values", 1),
            l = $(".range-slider-maxload-right").val().replace(/[^0-9]/g, ""),
            i = $(".range-slider-maxload").slider("option", "max"), r = $(".range-slider-maxload").slider("values", 0);
        e > t && (e = t), e < s && (e = s), "" == e && (e = 0), l < r && (l = r), l > i && (l = i), "" == l && (l = 0), $(".range-slider-maxload-left").val(e), $(".range-slider-maxload-right").val(l), e != r && $(".range-slider-maxload").slider("values", 0, e), l != t && $(".range-slider-maxload").slider("values", 1, l)
    }))
}));
var $tabs = function (e) {
    var s, t = "string" == typeof e ? document.querySelector(e) : e, l = function (e) {
        var t, l, i;
        t = document.querySelector(e.getAttribute("href")), l = e.parentElement.querySelector(".tabs__link_active"), i = t.parentElement.querySelector(".tabs__pane_show"), e !== l && (null !== l && l.classList.remove("tabs__link_active"), null !== i && i.classList.remove("tabs__pane_show"), e.classList.add("tabs__link_active"), t.classList.add("tabs__pane_show"), document.dispatchEvent(s))
    };
    return s = new CustomEvent("tab.show", {detail: t}), t.addEventListener("click", (function (e) {
        var s = e.target;
        s.classList.contains("tabs__link") && (e.preventDefault(), l(s))
    })), {
        showTab: function (e) {
            l(e)
        }, switchTabTo: function (e) {
            var s, i;
            s = e, (i = t.querySelectorAll(".tabs__link")).length > 0 && (s > i.length ? s = i.length : s < 1 && (s = 1), l(i[s - 1]))
        }
    }
};
// $tabs(".order-confirm__reciev-method-tabs"), $tabs(".order-confirm__payments-method-tabs"), $tabs(".legal-person__tabs");

$('body').on('click', '.modal-close-btn', function (e) {
    e.preventDefault();
    $('.login-modal').removeClass('active');
    $('.registration-modal').removeClass('active');
    $('.password-recovery-modal').removeClass('active');
    $('.password-recovery-success-modal').removeClass('active');
    return false;
});
$('body').on('click', '.close_popup', function (e) {
    e.preventDefault();
    $('.login-modal').removeClass('active');
    $('.registration-modal').removeClass('active');
    $('.password-recovery-modal').removeClass('active');
    $('.password-recovery-success-modal').removeClass('active');
    return false;
});
window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
        $('.login-modal').removeClass('active');
        $('.registration-modal').removeClass('active');
        $('.password-recovery-modal').removeClass('active');
        $('.password-recovery-success-modal').removeClass('active');
    }
};


$('body').on('click', '.popup_login', function (e) {
    e.preventDefault();
    $('.login-modal').addClass('active');
    $('.registration-modal').removeClass('active');
    $('.password-recovery-modal').removeClass('active');
    $('.password-recovery-success-modal').removeClass('active');
    return false;
});
$('body').on('click', '.popup_registration', function (e) {
    e.preventDefault();
    $('.login-modal').removeClass('active');
    $('.registration-modal').addClass('active');
    $('.password-recovery-modal').removeClass('active');
    $('.password-recovery-success-modal').removeClass('active');
    return false;
});
$('body').on('click', '.popup_password-recovery', function (e) {
    e.preventDefault();
    $('.login-modal').removeClass('active');
    $('.registration-modal').removeClass('active');
    $('.password-recovery-modal').addClass('active');
    $('.password-recovery-success-modal').removeClass('active');
    return false;
});
$('body').on('click', '.popup_password-recovery-success', function (e) {
    e.preventDefault();
    $('.login-modal').removeClass('active');
    $('.registration-modal').removeClass('active');
    $('.password-recovery-modal').removeClass('active');
    $('.password-recovery-success-modal').addClass('active');
    return false;
});

// CHECKUOT
$('body').on('click', '.delivery-link', function (e) {
    e.preventDefault();
    var delivery = $(this).data('delivery');
    var delivery_text = $(this).children('p').text();
    $('input[name="delivery"]').val(delivery);
    $('.delivery-link').removeClass('tabs__link_active');
    $(this).addClass('tabs__link_active');
    $('.order-total__delivery-method-type').html(delivery_text);
    if (delivery == 1){
        $('.delivery_tabs').show();
        $('.order-total__delivery-cost1').show();
        $('.order-total__delivery-cost2').hide();
        $('input[name="locality"]').attr("required", "true");
        $('input[name="street"]').attr("required", "true");
        $('input[name="house"]').attr("required", "true");
    } else if(delivery == 2){
        $('.delivery_tabs').hide();
        $('.order-total__delivery-cost1').hide();
        $('.order-total__delivery-cost2').show();
        $('input[name="locality"]').attr("required", false);
        $('input[name="street"]').attr("required", false);
        $('input[name="house"]').attr("required", false);
    }

    return false;
});
$('body').on('click', '.payment-link', function (e) {
    e.preventDefault();
    var payment = $(this).data('payment');
    var delivery_text = $(this).children('p').text();
    $('input[name="payment"]').val(payment);
    $('.payment-link').removeClass('tabs__link_active');
    $(this).addClass('tabs__link_active');
    $('.order-total__payments-method-type').html(delivery_text);
    if (payment == 1){
        $('.payment_tabs').hide();
        $('#bank-card').show();
        $('input[name="card_full-name"]').attr("required", "true");
        $('input[name="card_email"]').attr("required", "true");
        $('input[name="card_country"]').attr("required", "true");
    } else if(payment == 2){
        $('.payment_tabs').hide();
        $('#cash').show();
        $('input[name="card_full-name"]').attr("required", false);
        $('input[name="card_email"]').attr("required", false);
        $('input[name="card_country"]').attr("required", false);
    } else if(payment == 3){
        $('.payment_tabs').hide();
        $('#cashless').show();
        $('input[name="card_full-name"]').attr("required", false);
        $('input[name="card_email"]').attr("required", false);
        $('input[name="card_country"]').attr("required", false);
    } else if(payment == 4){
        $('.payment_tabs').hide();
        $('#bank-card-courier').show();
        $('input[name="card_full-name"]').attr("required", false);
        $('input[name="card_email"]').attr("required", false);
        $('input[name="card_country"]').attr("required", false);
    }
    return false;
});
$('body').on('click', '.vat_link', function (e) {
    e.preventDefault();
    var vat = $(this).data('vat');

    $('input[name="vat"]').val(vat);
    $('.vat_link').removeClass('tabs__link_active');
    $(this).addClass('tabs__link_active');
    if (vat == 2){
        $('#nds-payer').show();
        $('#nds-payer input').attr("required", "true");
    } else if(vat == 1){
        $('.vat_tabs').hide();
        $('#nds-payer input').attr("required", false);
    }

    return false;
});



$('body').on('submit', '#checkout', function (e) {
    var form_info = $(this).serializeArray();
    $('.error_delivery').html();
    $('.error_payment').html();
    $('.error_vat').html();
    $.ajax({
        url: '/ajax/order_check', // путь к обработчику
        type: 'POST', // метод отправки
        dataType: 'json',
        data: form_info,
        success: function (data) {
            if (data.error == 1){
                $('.error_delivery').html(data.mesaje);
                $('html, body').animate({
                    scrollTop: $(".error_delivery").offset().top  // класс объекта к которому приезжаем
                }, 500);
            } else if(data.error == 2) {
                $('.error_payment').html(data.mesaje);
                $('html, body').animate({
                    scrollTop: $(".error_payment").offset().top  // класс объекта к которому приезжаем
                }, 500);
            } else if(data.error == 3) {
                $('.error_vat').html(data.mesaje);
                $('html, body').animate({
                    scrollTop: $(".error_vat").offset().top  // класс объекта к которому приезжаем
                }, 500);
            } else {
                window.location.href = data.mesaje;
            }
        },
        error: function (data) {
            console.log(data); // выводим ошибку в консоль
        }
    });

    return false;
});

// ФИЛЬТРЫ
function getFilter(e){
    e.preventDefault();
    var price_from = $('input[name="price_from"]').val();
    var price_to = $('input[name="price_to"]').val();
    var page = $('#page').val();
    var sort = $('#sort').val();
    sort = '&sort='+sort
    var lang = $('#lang_site').val();
    var full_url_page = $('#full_url_page').val();
    var category_id = $('#category_id').val();
    var url ='/'+ lang + '/filter_products/';
    page = '&page='+page;
    var filter1 = $('.filter__input:checked').serialize();
    var i=0,filter=[];
    $('.catalog-filter__color-circle.checked').each(function(){
        var col = $(this).attr('data-color');
        col = col.replace(/#/,"");
        filter[i] = "color_"+col+"="+col;
        i++;
    });
    filter = filter.join("&") + filter1;
    var price = '&price_from='+price_from+'&price_to='+price_to;
    filter = filter + price + page + sort;
    history.pushState({}, ' ', '?'+filter);
    $.ajax({
        url: url, // путь к обработчику
        type: 'POST', // метод отправки
        dataType: 'html',
        data: {filter:filter,category_id:category_id,full_url_page:full_url_page},
        success: function (data) {
            $('.all-products-list').html(data);
        },
        error: function (data) {
            console.log(data); // выводим ошибку в консоль
        }
    });
    return false;
};

function productClick(productObj) {
    window.dataLayer = window.dataLayer || []; 
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        'event': 'productClick',
        'ecommerce': {
            'click': {
                'actionField': {'list': 'click'},      // Optional list property.
                'products': [{
                    'name': productObj.attr('data-name'),                      // Name or ID is required.
                    'id': productObj.attr('data-id'),
                    'price': productObj.attr('data-price'),
                    'category': productObj.attr('data-cat'),
                    'SKU': productObj.attr('data-SKU'),
                    'variant': (undefined !== productObj.attr('data-variant')) ? productObj.attr('data-variant') : '',
                    'currencyCode': 'MDL'
                }]
            }
        },
        'eventCallback': function() {
            document.location = productObj.attr('href')
        }
    });
}
function onCheckoutOption(step, checkoutOption) {
    window.dataLayer = window.dataLayer || []; 
    dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    dataLayer.push({
        'event': 'checkoutOption',
        'ecommerce': {
            'checkout_option': {
                'actionField': {'step': step, 'option': checkoutOption}
            }
        }
    });
}

/**
 * A function to handle a click on a checkout button. This function uses the eventCallback
 * data layer variable to handle navigation after the ecommerce data has been sent to Google Analytics.
 */
function onCheckout(products) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
        'event': 'checkout',
        'ecommerce': {
            'checkout': {
                'actionField': {'step': 1},
                'products':products
            }
        },
        'eventCallback': function() {
            document.location =$('.order-btn').parent().attr('href');
        }
    });
}

function deleteFromCart(productObj){
    window.dataLayer = window.dataLayer || [];   
    dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
        'event': 'removeFromCart',
        'ecommerce': {
            'currencyCode': 'MDL',
            'remove': {                            // 'remove' actionFieldObject measures.
                'products': [{                        //  removing a product to a shopping cart.
                    'name': productObj.attr('data-name'),
                    'id': productObj.attr('data-product_id'),
                    'price': productObj.attr('data-price'),
                    'category': productObj.attr('data-cat'),
                    'SKU': productObj.attr('data-SKU'),
                    'currencyCode': 'MDL',
                    'quantity': 1
                }]
            }
        }
    });

}
function addInCart(productObj){
window.dataLayer = window.dataLayer || []; 
dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
        'event': 'addToCart',
        'ecommerce': {
            'currencyCode': 'MDL',
            'add': {                                // 'add' actionFieldObject measures.
                'products': [{                        //  adding a product to a shopping cart.
                    'name': productObj.attr('data-name'),
                    'id': productObj.attr('data-product_id'),
                    'price': productObj.attr('data-price'),
                    'category': productObj.attr('data-cat'),
                    'SKU': productObj.attr('data-SKU'),
                    'currencyCode': 'MDL',
                    'quantity': 1
                }]
            }
        }
    });
}
$('.range-price').on('keyup',function(e){
    getFilter(e);
})
$(".filter__input").on('change',function(e){
    getFilter(e);
})
$("body").on('click',".catalog-filter__color-circle", function(e){
    $(this).toggleClass('checked');
    getFilter(e);
})

$('body').on('click','.product-card__link', function(e){
    productClick($(this));
})

$('body').on('click', ".plus-basket-btn", function(){
    addInCart($(this));
})
$('body').on('click', ".button-buy", function(){
    addInCart($(this));
})
$('body').on('click', ".button_buy_item", function(){
    addInCart($(this));
})
$('body').on('click', ".delete_product_cart", function(){
    deleteFromCart($(this));
})
$('body').on('click', ".minus-basket-btn", function(){
    deleteFromCart($(this));
})
$('body').on('click','.order_step2', function(e){
    var option = new Object(),options = [];
    option['livrarea'] = $('.delivery-link.tabs__link_active').attr('data-title');
    option['Plata'] = $('.payment-link.tabs__link_active').attr('data-title');
    options.push(option)
    onCheckoutOption(2,options);
})
$('body').on('click',".order_step1",function(){
    var data=[], i=0;
    $('.delete_product_cart').each(function(){
        var item = new Object();
        item['name']        = $(this).attr('data-name');
        item['id']          = $(this).attr('data-product_id');
        item['price']       = $(this).attr('data-price');
        item['category']    = $(this).attr('data-cat');
        item['SKU']         = $(this).attr('data-SKU');
        item['quantity']    = $(this).parent().parent().find(".sum-count-input").val();
        if(undefined !== $(this).attr('data-variant')){
            item['variant']     = $(this).attr('data-variant');
        }
        var jsn = [];
        var j = 0;
        for(var k in item){
            jsn[j] = "'" +  k + "': '" + item[k]+"'";
            j++;
        }
        data.push(item);
    })
    onCheckout(data);
})
$('body').on('click', '.filter-results-btn', function (e) {
    e.preventDefault();
    var price_from = $('input[name="price_from"]').val();
    var price_to = $('input[name="price_to"]').val();
    var page = $('#page').val();
    var sort = $('#sort').val();
    sort = '&sort='+sort
    var lang = $('#lang_site').val();
    var full_url_page = $('#full_url_page').val();
    var category_id = $('#category_id').val();
    var url ='/'+ lang + '/filter_products/';
    page = '&page='+page;
    var filter1 = $('.filter__input:checked').serialize();
    var i=0,filter=[];
    $('.catalog-filter__color-circle.checked').each(function(){
        var col = $(this).attr('data-color');
        col = col.replace(/#/,"");
        filter[i] = "color_"+col+"="+col;
        i++;
    });
    filter = filter.join("&") + filter1;
    var price = '&price_from='+price_from+'&price_to='+price_to;
    filter = filter + price + page + sort;
    history.pushState({}, ' ', '?'+filter);
    $.ajax({
        url: url, // путь к обработчику
        type: 'POST', // метод отправки
        dataType: 'html',
        data: {filter:filter,category_id:category_id,full_url_page:full_url_page},
        success: function (data) {
            $('.all-products-list').html(data);
        },
        error: function (data) {
            console.log(data); // выводим ошибку в консоль
        }
    });
    return false;
});

/* add to wishlist */
$('body').on('click', '.button_wishlist', function (e) {
    e.preventDefault();
    var button = $(this);
    var pathname  = window.location.pathname;
    var url_add = button.data('action');
    var product_id = button.data('product_id');
    $.ajax({
        url: url_add, // путь к обработчику
        type: 'POST', // метод отправки,
        dataType: 'json',
        data: {product_id: product_id},
        success: function (data) {
            if (data.add == '1'){
                $(button).addClass('button__like_active');
                $(button).html("<img src='/assets/img/my-heart.svg'>");
                $('.like-btn svg').addClass('button__like_active');
                $('.wishlist-btn__link-counter').html(data.count);
            } else {
                if (pathname.includes("wishlist")){
                    button.parent().parent().parent().parent().parent('.favorite_products').hide();
                    $('.wishlist-btn__link-counter').html(data.count);
                } else {
                    $(button).removeClass('button__like_active');
                    $(button).html("<svg width=\"32\" height=\"29\">\n" +
                        "                    <use href=\"/assets/img/sprite/sprite.svg#favorite\"></use>\n" +
                        "                </svg>");
                    $('.wishlist-btn__link-counter').html(data.count);
                }
            }
        },
        error: function (data) {
            $(this).addClass('button__like_active');
            setTimeout(function(){ $('#head_wishlist').removeClass('color_red'); }, 5000);
        }
    });
});
$('body').on('click', '.button_wishlist_page', function (e) {
    e.preventDefault();
    var button = $(this);
    var pathname  = window.location.pathname;
    var url_add = button.data('action');
    var product_id = button.data('product_id');
    $.ajax({
        url: url_add, // путь к обработчику
        type: 'POST', // метод отправки,
        dataType: 'json',
        data: {product_id: product_id},
        success: function (data) {
            button.parent().parent().addClass('d-none');
            $('.total_wishlist').html(data);
            $('.total_wishlist').removeClass('d-none');
            $('#head_wishlist').addClass('color_red');
            $('.head_svg_right').addClass('color_red');

            if (data == 0 && pathname == '/ro/wishlist'){
                location.reload();
            }
            if (data == 0){
                $('#head_wishlist').removeClass('color_red');
            }
        },
        error: function (data) {
            $('#head_wishlist').addClass('color_red');
            setTimeout(function(){ $('#head_wishlist').removeClass('color_red'); }, 5000);
        }
    });
});

$('body').on('change','.password', function (e) {
    e.preventDefault();
    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
    var digits = "0123456789"; // Цифры
    var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
    var is_s = false; // Есть ли в пароле буквы в нижнем регистре
    var is_b = false; // Есть ли в пароле буквы в верхнем регистре
    var is_d = false; // Есть ли в пароле цифры
    var is_sp = false; // Есть ли в пароле спецсимволы

    var password = $(this);
    var password_val = $(this).val();
    var password_length = password_val.length;
    for (var i = 0; i < password_length; i++) {
        /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
        if (!is_s && s_letters.indexOf(password_val[i]) != -1) is_s = true;
        else if (!is_b && b_letters.indexOf(password_val[i]) != -1) is_b = true;
        else if (!is_d && digits.indexOf(password_val[i]) != -1) is_d = true;
        else if (!is_sp && specials.indexOf(password_val[i]) != -1) is_sp = true;
    }
    var rating = 0;
    if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    if (password_length > 6 && rating >= 3) {
        $('.password_error').hide();
        $('.check_on').val(1);
    } else {
        $('.password_error').show();
        $('.check_on').val(0);
    }
});
$('body').on('change','.password_check', function (e) {
    e.preventDefault();
    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
    var digits = "0123456789"; // Цифры
    var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
    var is_s = false; // Есть ли в пароле буквы в нижнем регистре
    var is_b = false; // Есть ли в пароле буквы в верхнем регистре
    var is_d = false; // Есть ли в пароле цифры
    var is_sp = false; // Есть ли в пароле спецсимволы

    var password = $(this);
    var password_val = $(this).val();
    var password_length = password_val.length;
    for (var i = 0; i < password_length; i++) {
        /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
        if (!is_s && s_letters.indexOf(password_val[i]) != -1) is_s = true;
        else if (!is_b && b_letters.indexOf(password_val[i]) != -1) is_b = true;
        else if (!is_d && digits.indexOf(password_val[i]) != -1) is_d = true;
        else if (!is_sp && specials.indexOf(password_val[i]) != -1) is_sp = true;
    }
    var rating = 0;
    if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    if (password_length > 6 && rating >= 3) {
        $('.password_error').hide();
        $('.check_on').val(1);
    } else {
        $('.password_error').show();
        $('.check_on').val(0);
    }
});



$('input[name="search"]').keyup(function(e) {
    e.preventDefault();
    var search = $('input[name="search"]').val();
    var lg = $('input[name="lg"]').val();
    $.ajax({
        url: '/'+lg+'/search_head', // путь к обработчику
        type: 'POST', // метод отправки
        dataType: 'html',
        data: {search:search,lg:lg},
        success: function (data) {
            if (data === '1'){
                $('.search__popup').hide('');
            }else{
                $('.search__popup').show();
                $('.search__popup').html(data);
            }

        },
        error: function (data) {
            console.log(data); // выводим ошибку в консоль
        }
    });
    return false;
});
$('.search__link').click(function(e) {
    e.preventDefault();
    var search = $('input[name="search"]').val();
    var lg = $('input[name="lg"]').val();
    window.location.href = "/"+lg+"/search?search="+search;
    return false;
});
$('form.head_search').submit(function(e) {
    e.preventDefault();
    var search = $('input[name="search"]').val();
    var lg = $('input[name="lg"]').val();
    window.location.href = "/"+lg+"/search?search="+search;
    return false;
});
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".search"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.search__popup').hide(); // скрываем его
    }
});
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div_click = $("#nav_category"); // тут указываем ID элемента
    var div = $(".all-category-menu-wrapper"); // тут указываем ID элемента
    if ((!div.is(e.target)  // если клик был не по нашему блоку
        && div.has(e.target).length === 0) && (!div_click.is(e.target) && div_click.has(e.target).length === 0)) { // и не по его дочерним элементам
        $('.all-category').removeClass('active'); // скрываем его
        $(div).hide(); // скрываем его\
    }
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div_click = $(".login-submenu"); // тут указываем ID элемента
    var div = $("body .login-btn"); // тут указываем ID элемента
    if ((!div.is(e.target)  // если клик был не по нашему блоку
        && div.has(e.target).length === 0) && (!div_click.is(e.target) && div_click.has(e.target).length === 0)) { // и не по его дочерним элементам
        $(div_click).hide(); // скрываем его\
    } else {
        $(div_click).show();
    }
});
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div_click = $(".sort-filter__list"); // тут указываем ID элемента
    var div = $("body .accordion--multiple"); // тут указываем ID элемента
    if ((!div.is(e.target)  // если клик был не по нашему блоку
        && div.has(e.target).length === 0) && (!div_click.is(e.target) && div_click.has(e.target).length === 0)) { // и не по его дочерним элементам
        $(div_click).hide(); // скрываем его\
    } else {
        $(div_click).show();
    }
});

// Переход к мобильной версии фильтра
if ($(window).width() < 960) {
    $('.catalog-filter').addClass('catalog-filter-mobile'); // скрываем его
    $('.catalog-filter').removeClass('catalog-filter'); // скрываем его
}
$(window).resize(function() {
    if ($(window).width() < 960) {
        $('.catalog-filter').addClass('catalog-filter-mobile'); // скрываем его
        $('.catalog-filter').removeClass('catalog-filter'); // скрываем его
    }
    else {
        $('.catalog-filter-mobile').addClass('catalog-filter'); // скрываем его
        $('.catalog-filter-mobile').removeClass('catalog-filter-mobile'); // скрываем его
    }
});
$('.sort-filter__btn').click(function(e) {
    e.preventDefault();
    if ($('ul.sort-filter__list').hasClass('active')){
        $('ul.sort-filter__list').removeClass('active');
    } else {
        $('ul.sort-filter__list').addClass('active');
    }
    return false;
});
$("#phone_client").on("keyup", function() {
    var error_val = $(this).val().split('');
    error_val = error_val[5];
    if (error_val == 0){
        $("#phone_client").mask("+373 99999999");
        $(this).val('+373 ');
    }
});
$("#phone_client").on("blur", function() {
    var error_val = $(this).val().split('');
    error_val = error_val[5];
    if (error_val == 0){
        $("#phone_client").mask("+373 99999999");
        $(this).val('+373 ');
    }
});
$(document).ready(function() {
    $("#phone_client").mask("+373 99999999");
});

$(window).scroll(function () {
    if($(this).scrollTop() > 200){
        $('.header-main').addClass('header__fixed');
        let headHeight = $('.header-main').height();
        $('body').css('padding-top', `${headHeight + 10}px`);
    }else {
        $('.header-main').removeClass('header__fixed');
        $('body').css('padding-top', `0`);
    }

})
$('.catalog-filter__item .catalog-filter__title').on('click',function(){
    $(this).parent().find(".wrapper").slideToggle();
})