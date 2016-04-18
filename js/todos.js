// js/todos.js
(function(window, ns) {
    var todo = {
        get: function() {
            return "todo";
        }
    };
    window[ns] = todo;
})(window, "todo");
