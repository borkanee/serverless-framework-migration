'use strict'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credential': true
}

exports.getSettings = async (request, response) => {
  const params = {
    TableName: 'userSettings',
    Key: {
      user: request.params.user,
      organization: request.params.organization
    }
  }

  try {
    response.set(headers)
    const data = await dynamoDB.get(params).promise()

    if (data.Item) {
      response.status(200).send(data.Item.settings)
    } else {
      response.status(204).send('')
    }
  } catch (err) {
    response.status(500).send(err.message)
  }
}
