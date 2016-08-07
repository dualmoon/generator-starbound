var generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  constructor: function () {
    // Call the super constructor
    generators.Base.apply(this, arguments)
    this.option('coffee')
  },
  method1: function () {
    console.log('method1 hit')
  },
  prompting: function () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, {
      type: 'confirm',
      name: 'cool',
      message: 'Test for cool feature'
    }]).then(function (answers) {
      this.log('app name', answers.name)
      this.log('cool test', answers.cool)
    }.bind(this))
  }
})

