'use strict'

async function main (context) {
  return {
    body: {},
    status: 301,
    headers: {
      Location: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT}&scope=admin:org_hook%20read:user%20read:org&state=${process.env.GITHUB_API_STATE}`
    }
  }
}

module.exports =
{
  main
}
