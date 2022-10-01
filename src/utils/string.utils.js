function formatList(list) {
  try {
    let formattedList = 'Sua lista: \n'
    list.forEach(item => {
      formattedList += `- ${item} \n`
    }) 
    return formattedList
  } catch(err) {
    console.error(err.message)
  }
}

module.exports = {
  formatList
}