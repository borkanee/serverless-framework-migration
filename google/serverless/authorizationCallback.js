'use strict'

const fetch = require('node-fetch')

exports.authCallback = async (request, response) => {
  const tokenURL = `https://github.com/login/oauth/access_token?code=${request.query.code}&state=${
    process.env.GITHUB_API_STATE
  }&client_id=${process.env.GITHUB_CLIENT}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`

  try {
    let res = await fetch(tokenURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      }
    })

    if (!res.ok) {
      response.status(res.status).send(res.statusText)
    }

    res = await res.json()

    response.set('Access-Control-Allow-Origin', process.env.CLIENT_BASE_URL)
    response.set('Access-Control-Allow-Credential', true)
    response.cookie('token', res.access_token, { maxAge: 3600, httpOnly: true, secure: true })
    response.redirect(301, process.env.CLIENT_BASE_URL)
  } catch (err) {
    console.log(err) // output to AWS Log

    response.status(500).send(err.message)
  }
}
