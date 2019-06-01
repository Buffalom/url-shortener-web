export default function (self) {
  return function (error) {
    console.dir(error.response)
    if (error.response.status === 403) {
      self.$router.push({
        name: 'login',
        query: { nextUrl: self.$route.path }
      })
    }
  }
}
