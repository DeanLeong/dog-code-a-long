// Get all reeds https://dog.ceo/api/breeds/list/all
// get breed image https://dog.ceo/api/breed/${breed}/images/random

const getOptions = async () => {
  const url = 'https://dog.ceo/api/breeds/list/all'
  try {
    const response = await axios.get(url)
    // console.log(response.data.message)
    console.log(Object.keys(response.data.message))
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

getOptions()
