'use strict'

const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': process.env.CLIENT_BASE_URL
}

exports.deleteNotifications = async (request, response) => {
  let user = request.params.user

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

    response.set(headers)
    response.status(200).send('')
  } catch (err) {
    console.logg(err)
    response.set(headers)
    response.status(500).send('')
  }
}
