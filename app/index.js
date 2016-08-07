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
      name: 'playerConfigPatch',
      message: 'Will you need a player.config.patch?',
      default: false
    }]).then(function (answers) {
      this.log('app name', answers.name)
      this.log('player.config.patch?', answers.playerConfigPatch)
    }.bind(this))
  }
})

