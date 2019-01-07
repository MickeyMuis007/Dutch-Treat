console.log("Hi There");

var theForm = $("#theForm");
theForm.hide();

var button = $("#buyButton");
button.on("click", function () {
    console.log("Buying Item");
});

var productInfo = $(".product-props li");
productInfo.on("click", function () {
    console.log("You clicked on " + $(this).text());
});



/* 
 Notes: 
 - jQuery uses CSS selectors for searching for html elements.
    - Meaning the way CSS find elements to munipulate.
 - Getting jQuery object. It's either you use jQuery the entire word or a $.
 */