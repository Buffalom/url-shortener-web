import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  const MockAdapter = require('axios-mock-adapter')
  var mock = new MockAdapter(axios, { delayResponse: 1000 })

  let mockedAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvbUB0b21kZ20uY2giLCJleHAiOjE1NjAwMzIwNzk1NDYsImlhdCI6MTU1OTQyNzI3OX0.EoJZUt6TyQl6fQBbV0LAXQsCWSgwpJmZczC_y1hh2vQ'

  mock.onPost('/signup').reply(200, {
    message: 'Signup successful'
  })

  mock.onPost('/login').reply(config => {
    sessionStorage.setItem('AccessToken', mockedAccessToken)

    return [200, {
      message: 'Login successful'
    }]
  })

  mock.onGet('/shorts').reply(config => {
    if (sessionStorage.getItem('AccessToken')) {
      return [200, []]
    } else {
      return [403, {
        message: 'Unauthorized'
      }]
    }
  })
}

export default axios
