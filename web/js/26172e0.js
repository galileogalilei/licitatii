window.onload = function () {
    function doubleMenus() {
        var listEl = document.getElementsByTagName("li"),
            ul = document.getElementsByTagName("ul")[0],
            h,
            t,
            i = 0;
        console.log(listEl);
        while (i < listEl.length) {
            h = document.createElement("li");
            t = document.createTextNode("Menu " + (i + 3));
            h.appendChild(t);
            ul.appendChild(h);
            i++;
            if (i > 1000) {
                break;
            }
        }
        console.log(listEl);
    }

    var btn = document.getElementsByName('btn1')[0];
    btn.onclick = function (ev) {
        doubleMenus();
    }
}