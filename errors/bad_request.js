const { StatusCodes } = require('http-status-codes')
const CustomError = require('./custom_error')

class BadRequest extends CustomError {
    constructor(message) {
        super(StatusCodes.BAD_REQUEST, message)
    }
}

module.exports = BadRequest

