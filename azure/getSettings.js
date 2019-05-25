'use strict'

// const AWS = require('aws-sdk')
// const dynamoDB = new AWS.DynamoDB.DocumentClient()

// Above is for AWS, no DB:s for Azure yet. This function will also fail and return 500.

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credential': true
}

async function main(context) {
  const params = {
    TableName: 'userSettings',
    Key: {
      user: context.req.params.user,
      organization: context.req.params.organization
    }
  }

  try {
    const data = await dynamoDB.get(params).promise()

    if (data.Item) {
      return {
        status: 200,
        headers,
        body: data.Item.settings
      }
    } else {
      return {
        status: 204,
        headers
      }
    }
  } catch (err) {
    return {
      status: 500,
      headers
    }
  }
}

module.exports = {
  main
}
