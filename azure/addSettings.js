'use strict'

// const AWS = require('aws-sdk')
// const dynamoDB = new AWS.DynamoDB.DocumentClient() 


// Above is for AWS, no DB:s for Azure yet. This function will fail and return 500.
async function main(context) {
  const data = JSON.parse(context.req.body)

  const params = {
    TableName: 'userSettings',
    Item: {
      user: data.user,
      organization: data.org,
      settings: JSON.stringify(data.settings)
    }
  }

  try {
    await dynamoDB.put(params).promise()
    return {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
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

module.exports = {
  main
}
