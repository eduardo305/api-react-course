module.exports = {
  port: process.env.PORT || 3090,
  secret: process.env.SECRET,
  mongo: {
    uri: { 
      production: process.env.MONGO_URI
    },
    options: {
      db: {
        safe: true
      }
    }
  }
}