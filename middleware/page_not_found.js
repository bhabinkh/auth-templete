const { NotFoundError } = require("../errors/error")

const pageNotFound = (req, res) => {
    throw new NotFoundError('Page not Found')
}
module.exports = pageNotFound