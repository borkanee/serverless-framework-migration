'use strict'

// const AWS = require('aws-sdk')
// const dynamoDB = new AWS.DynamoDB.DocumentClient()

// Above is for AWS, no DB:s for Azure yet. This function will also fail and return 500.

const headers = {
  'Access-Control-Allow-Origin': '*'
}

async function main(context) {
  let data = JSON.parse(context.req.body)

  const params = {
    TableName: 'serviceWorkers',
    Item: {
      user: data.user,
      worker: JSON.stringify(data.subscription)
    }
  }

  try {
    await dynamoDB.put(params).promise()
    return {
      status: 201,
      headers
    }
  } catch (err) {
    console.log(err)
    return {
      status: 500,
      headers
    }
  }
}

module.exports = {
  main
}
