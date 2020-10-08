console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', () => {
    fetchImages()
    fetchBreeds()
})


function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(data => data.message.forEach(dog => {
        addImages(dog)
    }))
    // console.log(imgURL)
}

function addImages(image) {
    let container = document.querySelector('#dog-image-container')
    let newImage = document.createElement("img")
    newImage.src = image
    container.append(newImage)
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => { for (const [key, value] of Object.entries(data.message)) {
        addBreeds(key);
    }})
}

function addBreeds(breed) {
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.addEventListener('click', changeColor)
    li.innerText = breed 
    let dropDown = document.querySelector('#breed-dropdown')
    ul.appendChild(li)
    dropDown.addEventListener('change', () => {
        if(li.innerText[0] === dropDown.value) {
            // li.innerText = ""
            ul.appendChild(li)
        }
        else {
            li.remove()
        }
    })
}

function changeColor(event) {
    event.target.style.color = "red"
}

// function sortByBreed(event) {
//     let ul = document.querySelector('#dog-breeds')
//     let dropDownValue = document.querySelector('#breed-dropdown').value
//     ul.forEach(li => {
//         console.log(li)
//         if(li.innerText[0] == dropDownValue){   
//         }
//     })

// }