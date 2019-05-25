exports.auth = async (request, response) => {
  response.redirect(
    301,
    `https://github.com/login/oauth/authorize?client_id=${
      process.env.GITHUB_CLIENT
    }&scope=admin:org_hook%20read:user%20read:org&state=${process.env.GITHUB_API_STATE}`
  )
}
