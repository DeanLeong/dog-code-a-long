// Get all reeds https://dog.ceo/api/breeds/list/all
// get breed image https://dog.ceo/api/breed/${breed}/images/random

const getOptions = async () => {
  const url = 'https://dog.ceo/api/breeds/list/all'
  try {
    const response = await axios.get(url)
    // console.log(response.data.message)
    // console.log(Object.keys(response.data.message))
    const list = Object.keys(response.data.message)
    optionValues(list)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

getOptions()

function optionValues(list) {
  // console.log(list)
  const select = document.querySelector('select')
  return list.forEach((dog) => {
    // console.log(dog)
    const option = document.createElement('option')
    option.value = `${dog}`
    option.textContent = `${dog}`
    select.append(option)
  })
}

function getValue(e) {
  e.preventDefault()
  const optionValue = document.querySelector('#select-breed').value
  console.log(optionValue)
  getBreed(optionValue)
}

async function getBreed(breed) {
  removePic()
  const url = `https://dog.ceo/api/breed/${breed}/images/random`
  try {
    const response = await axios(url)
    // console.log(response.data.message)
    const breedImg = response.data.message
    dogPic(breedImg)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function dogPic(breed) {
  const img = document.createElement('img')
  img.src = breed
  document.querySelector('#append-dog').append(img)
  document.querySelector('select').value = ''
}

function removePic() {
  const oldPic = document.querySelector('#append-dog')
  while (oldPic.lastChild) {
    oldPic.removeChild(oldPic.lastChild)
  }
}

const form = document.querySelector('form')
form.addEventListener('submit', getValue)