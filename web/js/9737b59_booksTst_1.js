window.onload = function () {
    /* execute the code only after the DOM was loaded */
    document.addEventListener("DOMContentLoaded",
        function (oEvent) {
        console.log('start');
            /* get a reference to the <ul> root element */
            var oRoot = document.getElementById("books_area").getElementsByTagName('ul')[0];
            /* add just one click event to the root element which will capture all the click events bubbled by the child elements */
            oRoot.addEventListener("click",
                function (e) {
                    if (e.target.nodeName == 'LI') {
                        console.log('You clicked' + e.target.innerHTML);
                    }
                }
            );
        }
    );
}