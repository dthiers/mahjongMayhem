module.exports = function(app){
  app.constant('TEST', {
    test: "This is a test from a constant module outside of the app.js"
  })
}
