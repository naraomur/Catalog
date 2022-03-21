           //vanilla JS
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

    // Wanted to ease the work and switched to Jquery

$(document).ready(function () {
    $(".col1").click(function () {
        $(".main").hide(function () {
            $(".collectionslide").show(1000, function () {
                $(".nav").show(500);
                $(".navfooter").show(500, function () {
                    $(".one").show(500);
                    $(".indie").show(500);
                });
            })
        })
    })
});    



