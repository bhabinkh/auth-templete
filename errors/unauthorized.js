const { StatusCodes } = require('http-status-codes')
const CustomError = require('./custom_error')

class Unauthorized extends CustomError {
    constructor(message) {
        super(StatusCodes.UNAUTHORIZED, message)
    }
}
module.exports = Unauthorized