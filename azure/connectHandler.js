'use strict'

// const AWS = require('aws-sdk')
// const dynamoDB = new AWS.DynamoDB.DocumentClient()

// Above is for AWS, no DB:s for Azure yet. This function will also fail and return 500.
async function main(context, req) {
  if (req.headers.origin !== process.env.CLIENT_BASE_URL) {
    return {
      status: 404
    }
  }

  if (event.requestContext.routeKey === '$connect') {
    let user = event.queryStringParameters.user
    let connectionID = event.requestContext.connectionId

    const params = {
      TableName: 'socketConnections',
      Item: {
        user,
        connectionID
      }
    }

    try {
      await dynamoDB.put(params).promise()
      return {
        status: 200
      }
    } catch (err) {
      console.log(err)
      return {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    }
  }
}

module.exports = {
  main
}
