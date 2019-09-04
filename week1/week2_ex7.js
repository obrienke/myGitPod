var Messages = (function () {
    function Messages() {
    }
    Messages.prototype.display_message = function () {
        alert("Hello to you from the browser!!");
    };
    Messages.prototype.change_text = function () {
        var el = document.getElementById("p1");
        el.innerHTML = "Updated Text";
        el.style.color = "red";
        el.style.fontSize = "14pt";
    };
    return Messages;
}());
var messages = new Messages();
/*document.getElementById("b1").addEventListener("click", messages.display_message);
document.getElementById("b1").addEventListener("click", messages.change_text);*/
document.getElementById("b1").addEventListener("click", function () {
    messages.change_text();
    messages.display_message();
});
