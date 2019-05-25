'use strict'

// const AWS = require('aws-sdk')
// const dynamoDB = new AWS.DynamoDB.DocumentClient()

// Above is for AWS, no DB:s for Azure yet. This function will also fail and return 500.

const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': process.env.CLIENT_BASE_URL
}

async function main(context) {
  let user = context.req.params.user

  const params = {
    TableName: 'notifications',
    KeyConditionExpression: '#usr = :userVal',
    ExpressionAttributeNames: {
      '#usr': 'user'
    },
    ExpressionAttributeValues: {
      ':userVal': user
    }
  }

  try {
    let data = await dynamoDB.query(params).promise()
    if (data.Count > 0) {
      for (let item of data.Items) {
        let deleteParams = {
          TableName: 'notifications',
          Key: {
            user: item.user,
            notification: item.notification
          }
        }
        await dynamoDB.delete(deleteParams).promise()
      }
    }

    return {
      status: 200,
      headers
    }
  } catch (err) {
    console.logg(err)
    return {
      status: 500,
      headers
    }
  }
}

module.exports = {
  main
}
