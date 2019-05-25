exports.corsHandler = async (request, response) => {
  response.set('Access-Control-Allow-Credentials', true)
  response.set('Access-Control-Allow-Origin', process.env.CLIENT_BASE_URL)
  response.set('Access-Control-Allow-Headers', 'Content-Type')
  response.set('Access-Control-Allow-Methods', 'POST, DELETE')
  response.status(200).send('')
}
