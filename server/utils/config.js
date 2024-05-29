require('dotenv').config()

console.log('Secret ' + process.env.SECRET)
console.log('Mongo ' + process.env.MONGODB_URI)
console.log('MongoTest ' + process.env.TEST_MONGODB_URI)
console.log('Port ' + process.env.PORT)

const PORT = process.env.PORT
const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

const TEST_MODE = process.env.NODE_ENV === 'test'

const SECRET = process.env.SECRET

module.exports = {
  MONGODB_URI,
  PORT,
  TEST_MODE,
  SECRET
}