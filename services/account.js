const db = require('../src/models/index')

module.exports = class Account {
  constructor (config) {
    this.env = 'local'
  }
  async createAccount (data) {
    console.log(db.sequelize.models.account)
    const res = await db.sequelize.models.account.create(data)
    return res
  }
}

