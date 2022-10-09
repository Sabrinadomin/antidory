exports.handler = async (e) => {
  console.log('Received an update!', e.body)
  return { statusCode: 200 }
}