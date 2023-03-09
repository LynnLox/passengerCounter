//console and document are objects
let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0
function increment(){
    count += 1
    countEl.innerText = count
}

function decrement(){
    if (count>0){
        count -= 1
        countEl.innerText = count
    }
}

function save(){
    console.log(count)
}