/*-- Nav --*/
var nav = $('nav');
var line = $('<div />').addClass('line');

line.appendTo(nav);

var active = nav.find('.active');
var pos = 0;
var wid = 0;

if(active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
        left: pos,
        width: wid
    });
}

nav.find('ul li a').click(function(e) {
    e.preventDefault();
    if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {

        nav.addClass('animate');

        var _this = $(this);

        nav.find('ul li').removeClass('active');

        var position = _this.parent().position();
        var width = _this.parent().width();

        if(position.left >= pos) {
            line.animate({
                width: ((position.left - pos) + width)
            }, 300, function() {
                line.animate({
                    width: width,
                    left: position.left
                }, 150, function() {
                    nav.removeClass('animate');
                });
                _this.parent().addClass('active');
            });
        } else {
            line.animate({
                left: position.left,
                width: ((pos - position.left) + wid)
            }, 300, function() {
                line.animate({
                    width: width
                }, 150, function() {
                    nav.removeClass('animate');
                });
                _this.parent().addClass('active');
            });
        }

        pos = position.left;
        wid = width;
    }
});
/*-- Nav --*/

// -- Scroll to top --
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
document.getElementById("myBtn").onclick = function() {
    scrollTo(0, 2000); // it will take 3 seconds to reach to top.

}

function scrollTo(element, duration) {
    var e = document.documentElement;
    if (e.scrollTop === 0) {
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e : document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}

function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if (typeof from === "object") from = from.offsetTop;
    if (typeof to === "object") to = to.offsetTop;

    scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed <= 0) {
        element.scrollTop = xTo;
        return;
    }
    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;
    debugger;
    setTimeout(function() {
        scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
}

function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
}
/*-- Scroll to top --*/


/*-- Services Start --*/

"use strict";

const center = { x: 325, y: 185 };
const serv_dist = 250;
const pointer_dist = 172;
const pointer_time = 2;
const icon_size = 42;
const circle_radius = 38;
const text_top_margin = 18;
const tspan_delta = 16;

//name is used as the title for the bubble
//icon is the id of the corresponding svg symbol
// var services_data = [{ name: "UI/UX Design", icon: "ui-ux-design" }, { name: "Web Development", icon: "ui-ux-design" }, { name: "Mobile  Development", icon: "engineering" }, { name: "", icon: "" }, { name: "Quailty Assurance", icon: "manufacturing" }, { name: "Dedicated Team \nModel", icon: "technical" }, { name: "Agile Project \nManagement", icon: "process" }];
var service=[
    "UI/UX Design","Web Development","Mobile Development","Quality Assurance","Dedicated Team \nModel","Agile Project \nManagement"
]

var services = document.getElementById("service-collection");
var nav_container = document.getElementById("circle-nav-services");
var symbol_copy = document.getElementById("circle-nav-copy");
var use_copy = document.querySelector("use.nav-copy");

// Keeps code DRY avoiding namespace for element creation
function createSVGElement(el) {
    return document.createElementNS("service", el);
}




// ========================================================================
//Quick setup for multiple attributes
function setAttributes(el, options) {
    Object.keys(options).forEach(function (attr) {
        el.setAttribute(attr, options[attr]);
    });
}

//Service bubbles are created dynamically(expertise section)
function addService(serv, index) {
    var group = createSVGElement("g");
    group.setAttribute("class", "service serv-" + index);
    // =================================================================






    /* This group is needed to apply animations in
      the icon and its background at the same time */
    // var icon_group = createSVGElement("g");
    // icon_group.setAttribute("class", "icon-wrapper");

    // var circle = createSVGElement("circle");
    // setAttributes(circle, {
    //     r: circle_radius,
    //     cx: center.x,
    //     cy: center.y
    // });
    // var circle_shadow = circle.cloneNode();
    // setAttributes(circle, {
    //     class: 'shadow'
    // });
    // icon_group.appendChild(circle_shadow);
    // icon_group.appendChild(circle);

    // var symbol = createSVGElement("use");
    // setAttributes(symbol, {
    //     'x': center.x - icon_size / 2,
    //     'y': center.y - icon_size / 2,
    //     'width': icon_size,
    //     'height': icon_size
    // });
    // symbol.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + serv.icon);
    // icon_group.appendChild(symbol);

    // group.appendChild(icon_group);

    // var text = createSVGElement("text");
    // setAttributes(text, {
    //     x: center.x,
    //     y: center.y + circle_radius + text_top_margin
    // });

    // var tspan = createSVGElement("tspan");
    // if (serv.name.indexOf('\n') >= 0) {

    //     var tspan2 = tspan.cloneNode();
    //     var name = serv.name.split('\n');
    //     jQuery(tspan).text(name[0]);
    //     jQuery(tspan2).text(name[1]);

    //     setAttributes(tspan2, {
    //         x: center.x,
    //         dy: tspan_delta
    //     });

    //     text.appendChild(tspan);
    //     text.appendChild(tspan2);
    // } else {
    //     jQuery(tspan).text(serv.name);
    //     text.appendChild(tspan);
    // }

    // group.appendChild(text);
    // services.appendChild(group);

    // var service_bubble = jQuery(".serv-" + index);

    //Uses tween to look for right position
    twn_pivot_path.seek(index);
    TweenLite.set(service_bubble, {
        x: pivot_path.x,
        y: pivot_path.y,
        transformOrigin: "center center"
    });

    service_bubble.click(serviceClick);
}

//Creates pointer
function createPointer() {
    var service_pointer = createSVGElement("circle");

    setAttributes(service_pointer, {
        cx: center.x - pointer_dist,
        cy: center.y,
        r: 12,
        class: "pointer"
    });

    nav_container.appendChild(service_pointer);

    service_pointer = document.querySelector("svg .pointer");

    var pointer_circle = [{ x: 0, y: 0 }, { x: pointer_dist, y: pointer_dist }, { x: pointer_dist * 2, y: 0 }, { x: pointer_dist, y: -pointer_dist }, { x: 0, y: 0 }];

    twn_pointer_path.to(service_pointer, pointer_time, {
        bezier: {
            values: pointer_circle,
            curviness: 1.5 },
        ease: Power0.easeNone,
        transformOrigin: "center center"
    });
}

//Defines behavior for service bubbles
function serviceClick(ev) {

    //There's always an active service
    jQuery(".service.active").removeClass("active");

    var current = jQuery(ev.currentTarget);
    current.addClass("active");

    //There's a "serv-*" class for each bubble
    var current_class = current.attr("class").split(" ")[1];
    var class_index = current_class.split('-')[1];

    //Hides current text of the main bubble
    jQuery(use_copy).addClass("changing");

    //Sets pointer to the right position
    twn_pointer_path.tweenTo(class_index * (pointer_time / (2 * 6)));

    //After it's completely hidden, the text changes and becomes visible
    setTimeout(function () {
        var viewBoxY = 300 * class_index;
        symbol_copy.setAttribute("viewBox", "0 " + viewBoxY + " 300 300");
        jQuery(use_copy).removeClass("changing");
    }, 250);
}

$(function() {
    $(".service").on('click', serviceClick);
})

//Array describes points for a whole circle in order to get
//the right curve
var half_circle = [{ x: -serv_dist, y: 0 }, { x: 0, y: serv_dist }, { x: serv_dist, y: 0 }, { x: 0, y: -serv_dist }, { x: -serv_dist, y: 0 }];

//A simple object is used in the tween to retrieve its values
var pivot_path = { x: half_circle[0].x, y: half_circle[0].y };

//The object is animated with a duration based on how many bubbles
//should be placed
var twn_pivot_path = TweenMax.to(pivot_path, 12, {
    bezier: {
        values: half_circle,
        curviness: 1.5
    },
    ease: Linear.easeNone
});

// services_data.reduce(function (count, serv) {
//     addService(serv, count);
//     return ++count;
// }, 0);

//The variable is modified inside the function
//but its also used later to toggle its class
var twn_pointer_path = new TimelineMax({ paused: true });
createPointer();

//Adding it immediately triggers a bug for the transform
setTimeout(function () {
    return jQuery("#service-collection .serv-0").addClass("active");
}, 200);
/*-- Services End --*/

// $('#blogCarousel2').carousel({
//     interval: 4000
// });


$('.owl-one').owlCarousel({
    loop:true,
    // autoWidth:true,
    autoplay:true,
    margin:10,
    items:7,
    singleItem:true,
    
    // responsiveClass:true,
    responsive:{
        0:{
            items:4,
        },
        700:{
            items:5,
        },
        1000:{
            items:7,
        }
    }
});
    
 
    

$('.owl-two').owlCarousel({
    loop:true,
    // autoWidth:true,
    autoplay:true,
    margin:200,
    items:3,
    singleItem:true,
    
    // responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
});
    
 
    


$('.owl-three').owlCarousel({
    loop:true,
    margin:10,
    items: 3,
    autoplay:true,
    singleItem:true,
    
    // responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:1,
        },
        1000:{
            items:3,
        }
    }
});

// $('.owl-three2').owlCarousel({
//     loop:true,
//     // autoWidth:true,
//     // autoplay:true,
//     // margin:10,
//     // items: 1,

//     items : 1, // THIS IS IMPORTANT

//     responsive : {
//         0 : { items : 1  }, // from zero to 480 screen width 4 items
//         480 : { items : 1  }, // from 480 screen widthto 768 6 items
//         768 : { items : 3   // from 768 screen width to 1024 8 items
//         }
//     },

    
 
    
