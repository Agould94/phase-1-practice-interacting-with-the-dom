
var isPaused = false 
var timeout = setInterval(function(){
    const counter = document.getElementById("counter")
    const counterNum = parseInt(counter.innerText)
    counter.innerText = counterNum+1
 }, 1000)

 const p = document.getElementById("pause")

 p.addEventListener("click", function(){
    if (isPaused = true){
        pause();
    }else if (isPaused=false){
        play();
    };
});


function pause(){
    clearInterval(timeout)
    isPaused = true
}
function play(){
    setInterval(function(){
        const counter = document.getElementById("counter")
        const counterNum = parseInt(counter.innerText)
        counter.innerText = counterNum+1
        }, 1000)
        isPaused = false
}





function decrement(){
    const counter = document.getElementById("counter")
    const counterNum = parseInt(counter.innerText)
    counter.innerText = counterNum - 1
}
const minus = document.getElementById("minus")

minus.addEventListener("click", decrement)

function increment(){
    const counter = document.getElementById("counter")
    const counterNum = parseInt(counter.innerText)
    counter.innerText = counterNum + 1
}

const plus = document.getElementById("plus")
plus.addEventListener("click", increment)

const likeArray = []
function like(){
    const counter = document.getElementById("counter")
    const counterNum = parseInt(counter.innerText)
    
    likeArray.unshift(counterNum)

    const times = likeArray.filter(l=>l==l).length

    for (l in likeArray){
        const list = document.querySelector(".likes")
        const li = document.createElement("li")
        li.textContent = `${likeArray[l]} was liked ${times} times!`
        list.append(li)
    }
    //debugger
}

const heart = document.getElementById("heart")
heart.addEventListener("click", like)




