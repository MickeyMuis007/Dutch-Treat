$(document).ready(function () {
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

    var $loginToggle = $("#loginToggle");       // Use $ sign for variable name to indicate, it's a jQuery object. Just a naming convention that's optional
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {

        /* 
         * When form is hidden, show it. If form is shown, hide it. jQuery toggles the display of the form.
         * The parameter passed in the toggle, applies animations for the number milliseconds you passed in.
         * You can use different animations like:
         *      - Like slideToggle(), fadeToggle()
         */
        $popupForm.toggle(1000);                    
    })
});


/* 
 Notes: 
 - jQuery uses CSS selectors for searching for html elements.
    - Meaning the way CSS find elements to munipulate.
 - Getting jQuery object. It's either you use jQuery the entire word or a $.
 - Wrapping code in the anonymous function, solves the issue with the global scope.
    - (function () { // Add code })();
    - This is where the properties you create becomes globally available.
    - Wrapping it in a anonymous function just create a anonymous function.
    - The (); at the end of the anonymous function is telling to execute the function.
- Alternative solution for the global scope issue, is when you use jQuery:
    - Wrap code in $(document).ready(fucntion () { })
    - Ready execute everything that is inside this block of code, as soon as the browser is ready.
        - So the browser will load the entire DOM first before executing the code.
 */