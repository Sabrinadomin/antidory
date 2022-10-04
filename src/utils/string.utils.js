function formatList(listObj) {
  try {
    let formattedList = 'Sua lista: \n'
    const list2 = [...listObj]
    list2.forEach(item => {
      if(item) formattedList += `- ${item} \n`
    }) 
    return formattedList
  } catch(err) {
    console.error(err.message)
  }
}

module.exports = {
  formatList
}