console.log('%c HI', 'color: firebrick')
var FILTER = null
var BREEDS = null
document.addEventListener('DOMContentLoaded', (event)=>{
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res=>res.json())
    .then(data => {
        data.message.map(dog => {
            let dogContainer = document.querySelector("#dog-image-container")
            let dogImage = document.createElement("img")
            dogImage.src = dog
            dogContainer.appendChild(dogImage)
        })
    })
    
    let dogBreedList = document.querySelector("#dog-breeds")
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(data => {
        BREEDS = Object.keys(data.message)
        Object.keys(data.message).map(breed=>{
        let listItem = document.createElement('li')
        listItem.innerText = breed
        listItem.addEventListener('click', event => {event.target.setAttribute('style', 'color:red')})
        dogBreedList.appendChild(listItem)})
    })
    let dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener('change', event=>{
    FILTER = event.target.value
    console.log(FILTER)
    const filteredList = BREEDS.filter(word => word.startsWith(FILTER))
        while(dogBreedList.firstChild){
            dogBreedList.removeChild(dogBreedList.firstChild)
        }
        filteredList.map(breed=>{
            let listItem = document.createElement('li')
            listItem.innerText = breed
            listItem.addEventListener('click', event => {event.target.setAttribute('style', 'color:red')})
            dogBreedList.appendChild(listItem)})
        
        } 
    )
}
)
