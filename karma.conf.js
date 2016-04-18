module.exports = function(config) {
    config.set({
        frameworks: ["mocha", "chai"],
        files: ["js/todos.js", "test/todo.test.js"],
        browsers: ["PhantomJS"],
        singleRun: true
    });
};