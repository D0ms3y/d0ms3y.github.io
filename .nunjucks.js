const Nunjucks = require('nunjucks')
const env = Nunjucks.configure('./src')

module.exports = { 
    data: {
        app: {
            assets: '../../assets/'
        }
    },
    env 
}