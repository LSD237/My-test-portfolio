// Выборка элементов через jQuery
// $("#boxDivId .item").css("color", "red"); //выбирает в элементе #boxDivId элемент .item
// $("#boxDivId").find(".item").css("color", "red") //также выбирает в одном другой (интуитивно понятнее)
// $("#massageFour + h1").css("color", "red") //тот что сражу после #massageFour элемента
// $("#massageTwo").prev().css("color", "red") //тот что перед #massageTwo элементом
// $("#massageTwo").next().css("color", "red") //тот что после #massageTwo элемента
// $("*").css("color", "red") //выбирает все элементы
// $("#boxDivId > div").css("color", "red") //выбирает всех потомков #boxDivId элемента
// $("#boxDivId > *").css("color", "red") //выбирает все элементы внутри #boxDivId элемента
// $(".item5 a.button").css("color", "red") //выберет "а" с классом "button" который в элементе с классоом "item5"

// var $boxDivId = $("#boxDivId");
// $boxDivId.find("a.button").css("color", "red"); //лучшее использование и проще ориентация

// $("#divFiveBox").find("a.button").css({"color":"red",
//                                         "display":"inline-block",
//                                         "text-decoration":"none",
//                                         "padding":"20px",
//                                         "border":"1px solid red",
//                                         "border-radius":"15px"})

//Добавление и удаление элементов
//Методы (элемент к которому).append и .appendTO(элемент к которому) добавляют в КОНЕЦ элемента
// .prepend и .prependTo добавляют в НАЧАЛО элемента (по аналогии выше)
//$("#boxDivId h1").remove() // Удаление элемента
// $("#boxDivId h1").replaceWith('<h2>LLL</h2>') // Заменяет элемент другим (баг с размером "h")

// var $myDiv = $('<div>BEEEEECH</div>', {'id':'my', 'class':'divBech'}).appendTo('#boxDivId')
// var $myDiv = $('<div>BEEEEECH</div>').attr({'id':'my', 'class':'divBech'}).appendTo('#boxDivId')

// var myDiv = document.createElement('div');
//     myDiv.id = "my";
//     myDiv.className = "divBech"; //Самый быстрый способ, это чистый js

// $("p").after("<hr/>")  //Два способа добавления линии после каждого "p"(парагарфа)
// $("<hr/>").insertAfter("p")

// $("p").before("<hr/>") //Тоже добавление линии ДО каждого "р"(параграфа)
// $("<hr/>").insertBefore("p")



// Добавление и удаление классов
// $("#boxDivId").addClass("name") //добавляет класс
// $("#boxDivId").removeClass("boxDiv") //удаляет класс

// Добавление атрибутов
// $("#aId").attr({"class":"name",
//                 "target":"_blank"
// })                                //добавление ссылке атрибутов

// Удаление html элемента
// $("#aId").remove("a")

//*************************************************/
// JS событие по щелчку
// function handler() {
//     alert("Hello man=)");
// }
// var aVariable = document.getElementById("aId");
// aVariable.addEventListener("click", handler);  //добавление обработчика событий
//*************************************************/

// $("#btn-start").click(function () {
//     $(this).hide(900); //анимация скрытия(меняет display: на значение "none") с заданной скоростью
// })

//Заданы стили "боксу" и по клику присвоена анимация(изменение css свойств)
$(".boxChenging").css({'width':'150px',
                        'height':'150px',
                        'background-color':'green'})

$('.boxChenging').click(function() {
    $(this).animate({'height':'+=50px',
                    'opacity':'-=0.1',
                    'width':'+=25px'}, 1000)

    // .animate({'height':'+=50px'},{duration:2000}, {queue:false})//параллельный запуск анимации (одновременно)
})
