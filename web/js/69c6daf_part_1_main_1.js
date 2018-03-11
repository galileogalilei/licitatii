window.onload = function () {
    function addNodes() {
        var hTags = document.querySelectorAll("H2,H3"),
            i = 0;
        console.log(hTags);
        while (i < hTags.length) {
            document.body.appendChild(document.createElement("H3"));
            i++;
            if (i > 100) {
                break;
            }
        }
        console.log(hTags);
    }

    var btn = document.getElementsByName('btn1')[0];
    btn.onclick = function (ev) {
        console.log('before addNodes called');
        addNodes();
        console.log('after addNodes called');
    }
    //addNodes();
}