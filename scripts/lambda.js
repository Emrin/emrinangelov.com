// https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html#API_SendEmail_RequestParameters
const aws = require('aws-sdk')
const ses = new aws.SES({ region: 'eu-central-1' })

exports.handler = async function (event, context) {
  // Event is a POST request with the following info: ]email, [message, ]subject[.
  // console.log('Received event:', JSON.stringify(event, null, 2))

  let statusCode = '200'
  const headers = {
    'Content-Type': 'application/json'
  }
  let body = 'OK'

  if (event.body) {
    try {
      const recipientEmailAddress = 'emrinangelov@protonmail.com'
      const sourceEmailAddress = 'noreply@aws.emrinangelov.com'
      const data = JSON.parse(event.body)
      const message = data.message
      // + '\n\n\n ---Event---\n'
      // + JSON.stringify(event, null, 2)
      const email = data.email !== '' ? data.email : 'No Subject'

      const params = {
        Destination: {
          ToAddresses: [recipientEmailAddress]
        },
        Message: {
          Body: {
            Text: { Data: message }
          },
          Subject: { Data: email }
        },
        Source: sourceEmailAddress
      }

      await ses.sendEmail(params).promise()
    } catch (e) {
      console.error('Error:', e)
      statusCode = '400'
      body = 'Error'
    } finally {
      body = JSON.stringify(body)
    }
  }

  return { statusCode, body, headers }
}
