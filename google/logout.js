'use strict'

exports.logout = async (request, response) => {
  response.set({
    'Access-Control-Allow-Credential': true,
    'Access-Control-Allow-Origin': process.env.CLIENT_BASE_URL
  })
  response.cookie('token', '', { maxAge: -3600, httpOnly: true, secure: true })
  response.status(200).send('')
}
