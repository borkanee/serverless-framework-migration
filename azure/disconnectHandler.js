'use strict'

// const AWS = require('aws-sdk')
// const dynamoDB = new AWS.DynamoDB.DocumentClient()

// Above is for AWS. It is not possible to use the WebSocket API for Azure yet.
// This function will also fail.

async function main(context) {
  // let connectionID = event.requestContext.connectionId

  let params = {
    TableName: 'socketConnections',
    Key: {
      connectionID
    }
  }

  try {
    await dynamoDB.delete(params).promise()
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  main
}
