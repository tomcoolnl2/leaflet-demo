
const theme = require('../theme.json');

module.exports = (sass) => {
    const sassUtils = require('node-sass-utils')(sass)
    function get(keys) {
        keys = keys.getValue().split`.`
        let result = theme
        for (let i = 0, l = keys.length; i < l; i += 1) {
            result = result[keys[i]]
        }
        return sassUtils.castToSass(result)
    }
    return {'get($selector)': (selector) => get(selector)}
}