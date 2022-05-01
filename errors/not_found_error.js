const { StatusCodes } = require('http-status-codes')
const CustomError = require('./custom_error')

class NotFoundError extends CustomError {
    constructor(message) {
        super(StatusCodes.NOT_FOUND, message)
    }
}
module.exports = NotFoundError