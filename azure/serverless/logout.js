'use strict'

async function main(context) {
  return {
    status: 200,
    headers: {
      'Access-Control-Allow-Credential': true,
      'Access-Control-Allow-Origin': process.env.CLIENT_BASE_URL,
      'Set-Cookie': 'token=; Max-Age=-3600; HttpOnly; Secure;'
    }
  }
}

module.exports = {
  main
}
