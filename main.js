(function() {
    var doc = document;
    var elem = doc.createElement("div");
    var content = doc.createTextNode("JS динамически созданный элемент JS");
    elem.append(content);
    var clientsP = doc.getElementById("clients");

    clientsP.insertAdjacentHTML('afterend', '<section id="sec"></section>');

    var secP = doc.getElementById("sec");
    secP.append(elem);

    elem.setAttribute('class', 'colors'); //присваивание атрибута
    elem.id = 'jsDiv'; //сокращенная форма присваивания атрибута

    var styleSection = secP.style;
    styleSection.maxWidth = '1600px';
    styleSection.margin = 'auto';
    styleSection.backgroundColor = '#2C5E9E';
    
    var styleDiv = elem.style;
    styleDiv.textAlign = 'center';
    styleDiv.padding = '20px';
    styleDiv.color = '#F6F8F8';
}) ();

$("#sec").click(function() {
    $(this).slideUp(900);
});