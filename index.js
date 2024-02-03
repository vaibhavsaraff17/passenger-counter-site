// document.getElementById("count-el").innerText = 6

// let count = 0

// console.log(count)

// let myage=18
// console.log(myage)

// let firstBatch = 6
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)
let countEl= document.getElementById("count-el")
console.log(countEl)
let count=0


function increment() {
    console.log("the button was clicked")
    count=count+1
    countEl.innerText=count

}

// DOM( DOCUMENT OBJECT MODULE)- used to modify the website

let saveEl= document.getElementById("save-el")
console.log(saveEl)
function save(){
    console.log(count)
    let countStr =count + " - " 
    saveEl.textContent= saveEl.textContent +  countStr
    countEl.textContent=0
    count=0
    
}

