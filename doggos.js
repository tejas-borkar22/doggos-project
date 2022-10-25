const BREEDS_URL = "https://dog.ceo/api/breeds/list/all"

const select = document.querySelector('.breeds')
const img = document.querySelector('.dog-img')
const gif = document.querySelector('.dog-gify')
let closeAlertBtn = document.querySelector('.close')

// Fetching Dog Breeds
fetch(BREEDS_URL)
.then(function (response){
  return response.json()
})
.then(function (data){
  console.log(data)
  const breedsObj = data.message
  const breedsArr = Object.keys(breedsObj)
  
  for(let i=0;i<breedsArr.length;i++){
    const option = document.createElement('option')
    option.value = breedsArr[i]
    option.innerText = breedsArr[i]
    select.appendChild(option)
  }
})
select.addEventListener('change', event =>{
  let DOGS_URL = `https://dog.ceo/api/breed/${event.target.value}/images/random`  //Dog api url with particular breed
  getDoggo(DOGS_URL)
})

function getDoggo(url){
  gif.classList.add("show")
  img.classList.remove("show")
  fetch(url)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      img.src = data.message
    })
}

img.addEventListener("load",()=>{
  gif.classList.remove("show") 
  img.classList.add("show")
})

//Function to close alert box 
closeAlertBtn.addEventListener("click", ()=> {
 let alert =  document.querySelector(".alert")
 alert.style.opacity = "0"
 setTimeout(()=>{ alert.style.display = "none"; }, 500);
})