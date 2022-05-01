const { CustomError } = require('../errors/error')
const { StatusCodes } = require("http-status-codes")

const errorHandlerMiddleware = (err, req, res, next) => {
    let CustomErr = {
        status_code: err.status_code || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || `Something went wrong. Please try again later`
    }
    if (err instanceof CustomError) {
        return res.status(err.status_code).json({ error: err.message })
    }
    if (err.name === 'ValidationError') {
        CustomErr.status_code = StatusCodes.BAD_REQUEST,
            CustomErr.message = Object.values(err.errors).map((item) => item.message).join(', ')
    }
    if (err.name === 'CastError') {
        CustomErr.status_code = StatusCodes.NOT_FOUND,
            CustomErr.message = `No item found with id: ${err.value}`
    }
    if (err.code && err.code === 11000) {
        CustomErr.status_code = StatusCodes.BAD_REQUEST,
            CustomErr.message = `Duplicate value entered for ${Object.keys(err.keyValue)} field`
    }
    return res.status(CustomErr.status_code).json({ msg: CustomErr.message })
}

module.exports = errorHandlerMiddleware
