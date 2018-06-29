const AccountClass = require('./services/account')
const db = require('./src/index')

console.log('==================== Database ======================')
db.sequelize.authenticate().then(() => {console.log('Connection has been established successfully.') })
.catch(err => {
  console.error('Unable to connect to the database:', err)
})


const account = new AccountClass({
  env: 'local'
})

account.createAccount(form)

module.exports = {
  account
}
