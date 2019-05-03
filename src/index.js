console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedsList = []
document.addEventListener('DOMContentLoaded', 

getDogInfo(),
getDogBreeds(),
document.querySelector('#breed').addEventListener('change', filterBreeds)

)

function getDogInfo() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(renderPics)
}

function renderPics(pics) {

    pics.message.forEach(renderPic)
}

function renderPic(pic) {
    let photos = document.querySelector('#dog-image-container')
    let image = document.createElement('img')
    image.src = pic
    photos.appendChild(image)
}

function getDogBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(renderBreeds)
}

function renderBreeds(breeds) {
    console.log('breeds', Object.keys(breeds.message))
    Object.keys(breeds.message).forEach(renderBreed)
}

function renderBreed(breed) {
    let breedList = document.querySelector('#dog-breeds')
    let listItem = document.createElement('li')
    listItem.innerText = breed
    listItem.id = breed[0]
    listItem.addEventListener('click', changeColor)
    breedsList.push(listItem)
    breedList.appendChild(listItem)
}

function changeColor(e) {
    let item = e.target
    if (item.style.color != "green") {
        item.style.color = "green"
    } else {
        item.style.color = "black"
    }  
}

function filterBreeds(e) {
    console.log('test3', breedsList)
    let container = document.querySelector('#dog-breeds')
    let list = document.querySelectorAll(`#${e.target.value}`)
    console.log('list', list)
    container.innerHTML = " "
    // list.forEach(item => container.appendChild(item))
    breedsList.forEach(function(item){
        if (item.id == e.target.value) {
            container.appendChild(item)
        }


    })

}

