var printsAttributes = function (attribute) {
    var a1 = attribute.search(/ /i);
    var a2 = attribute.search(/>/i);
    var b = attribute.slice(a1, a2 - 1);
    var new1 = b.replace(/"/gi, " ");
    var new2 = new1.replace(/  /gi, "\n");
    var new3 = new2.replace(/=/gi, ":");
    console.log(new3);
};
var printAll = function () {
    // const data= document.getElementById("text");
    var a = "<a href=\"http://example.com\">";
    var b = "<b>";
    var c = "<div class=\"my-class\" id=\"my-id\">";
    // printsAttributes(String(data));
    printsAttributes(a);
    printsAttributes(b);
    printsAttributes(c);
};
