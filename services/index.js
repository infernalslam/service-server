const accountServices = require('./account')
const orderServices = require('./order')

module.exports = {
  account: new accountServices(),
  order: new orderServices()
}