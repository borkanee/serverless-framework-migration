'use strict'

exports.addSettings = async (request, response) => {
  const data = req.body

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
    response.set('Access-Control-Allow-Origin', '*')
    response.status(200).send('')
  } catch (err) {
    console.log(err)
    response.set('Access-Control-Allow-Origin', '*')
    response.status(500).send('')
  }
}
