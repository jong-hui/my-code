const _ = require('lodash')

exports.default = {
  stringReplacer: function (templateString, object) {
    const replacerRegex = new RegExp(/\{\{(.+)\}\}/, 'g')

    return templateString.replace(replacerRegex, (match, p1) => {
      const currentReplaceString = _.get(object, p1)
      return currentReplaceString === undefined ? p1 : currentReplaceString
    })
  }
}
