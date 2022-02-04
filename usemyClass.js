const mc = require('./myClass')


const customer = new mc.Human('Andy')
customer.info()

const employee = new mc.Human('Boby', 25)
employee.info()