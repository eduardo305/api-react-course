module.exports = {
  port: process.env.PORT || 3090,
  secret: 'react-course',
  mongo: {
    uri: {
      development:  process.env.MONGO_URI || 'mongodb://react-course:react-course@ds159978.mlab.com:59978/react-course',
      test: process.env.TEST_MONGO_URI || 'mongodb://react-course:react-course@ds159978.mlab.com:59978/react-course'
    },
    options: {
      db: {
        safe: true
      }
    }
  }
}
