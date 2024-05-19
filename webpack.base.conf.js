const resolve = require('path').resolve


module.exports = {
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    entry: [ './index.js' ],
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, './dist')
    }
}