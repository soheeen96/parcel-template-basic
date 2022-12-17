//import (ESM 환경 동작)
 //require() (commonJS 환경 동작)
//const autoprefixer = require('autoprefixer')


//export (ESM 환경 동작)
//module.exports (commonJS 환경 동작)
module.exports = {
    plugin: [
        //autoprefixer
        require('autoprefixer')
    ]
}