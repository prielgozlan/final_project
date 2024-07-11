const devMode = false
let rootUrl
devMode?(rootUrl = "http://localhost:3000"):(rootUrl = "https://naies.onrender.com")
export default rootUrl