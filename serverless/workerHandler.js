'use strict'

const headers = {
  'Access-Control-Allow-Origin': '*'
}

exports.workerHandler = async (request, response) => {
  let data = request.body

  const params = {
    TableName: 'serviceWorkers',
    Item: {
      user: data.user,
      worker: JSON.stringify(data.subscription)
    }
  }

  try {
    await dynamoDB.put(params).promise()
    response.set(headers)
    response.status(201).send('')
  } catch (err) {
    console.log(err)
    response.set(headers)
    response.status(500).send('')
  }
}
