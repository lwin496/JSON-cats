let cats = `{
      "title": "Cat Families",
      "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
      "cats": [
        {
          "name": "Lindy",
          "breed": "Cymric",
          "color": "white",
          "kittens": [
            {
              "name": "Percy",
              "gender": "m"
            },
            {
              "name": "Thea",
              "gender": "f"
            },
            {
              "name": "Annis",
              "gender": "f"
            }
          ]
        },
        {
          "name": "Mina",
          "breed": "Aphrodite Giant",
          "color": "ginger",
          "kittens": [
            {
              "name": "Doris",
              "gender": "f"
            },
            {
              "name": "Pickle",
              "gender": "f"
            },
            {
              "name": "Max",
              "gender": "m"
            }
          ]
        },
        {
          "name": "Antonia",
          "breed": "Ocicat",
          "color": "leopard spotted",
          "kittens": [
            {
              "name": "Bridget",
              "gender": "f"
            },
            {
              "name": "Randolph",
              "gender": "m"
            }
          ]
        }
      ]
   }`
let catObjects = JSON.parse(cats)
console.log(catObjects)
// console.log(catObjects.cats[0].name)
console.log(catObjects.cats[0].kittens)


let titleText = catObjects.title
let introText = catObjects.intro
// mother cat 1 
let motherCat1Name = catObjects.cats[0].name
let motherCat1Breed = catObjects.cats[0].breed
let motherCat1Color = catObjects.cats[0].color
let motherCat1Kittens = JSON.stringify(catObjects.cats[0].kittens)

// mothercat 2 

let motherCat2Name = catObjects.cats[1].name
let motherCat2Breed = catObjects.cats[1].breed
let motherCat2Color = catObjects.cats[1].color
let motherCat2Kittens = JSON.stringify(catObjects.cats[1].kittens)

// mothercat3 
let motherCat3Name = catObjects.cats[2].name
let motherCat3Breed = catObjects.cats[2].breed
let motherCat3Color = catObjects.cats[2].color
let motherCat3Kittens = JSON.stringify(catObjects.cats[2].kittens)


// intro input
document.getElementById("intro").innerHTML = introText
document.getElementById("headerTitle").innerHTML = titleText

// mothercat 1 inputs
document.getElementById("name").innerHTML = 'mother cat: ' + motherCat1Name; 
document.getElementById('breed').innerHTML = 'breed: ' + motherCat1Breed;    
document.getElementById('color').innerHTML = 'color: ' + motherCat1Color
document.getElementById('kittens').innerHTML = 'kittens: ' + motherCat1Kittens
// mothercat 2 inputs 
document.getElementById("name1").innerHTML = 'mother cat: ' + motherCat2Name; 
document.getElementById('breed1').innerHTML = 'breed: ' + motherCat2Breed;    
document.getElementById('color1').innerHTML = 'color: ' + motherCat2Color
document.getElementById('kittens1').innerHTML = 'kittens: ' + motherCat2Kittens
// MOTHERCAT 3 INPUTS 
document.getElementById("name2").innerHTML = 'mother cat: ' + motherCat3Name; 
document.getElementById('breed2').innerHTML = 'breed: ' + motherCat3Breed;    
document.getElementById('color2').innerHTML = 'color: ' + motherCat3Color
document.getElementById('kittens2').innerHTML = 'kittens: ' + motherCat3Kittens

console.log(catObjects.cats[0].kittens[0])




