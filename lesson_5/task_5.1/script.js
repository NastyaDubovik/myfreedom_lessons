document.addEventListener('DOMContentLoaded', function(){

    let input = document.querySelector('input');
    function list() {
        var parent = document.getElementsByTagName("ul")[0];
        var li = document.createElement("li");
        parent.appendChild(li);
    }
   
    input.addEventListener('click', list);

});
