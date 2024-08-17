var istatus = document.querySelector("h5")
var removeFriend = document.querySelector("button")

var addFriend = document.querySelector("#add")

var check = 0
var fin = 0

addFriend.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        
        check = 1
    }
    else{
        istatus.innerHTML = "stranger"
        istatus.style.color = "red"
        check = 0
    }

})
removeFriend.addEventListener("click", function(){
    if(fin == 0){
    removeFriend.innerHTML = "remove"
    removeFriend.style.color = "red"
    fin = 1
    }else{

        removeFriend.innerHTML = "Add Friend"
        removeFriend.style.color = "#dadada"
        fin = 0
    }
    
})


// ye  #remove button k liye jab hum do button pe work krenge the we will use this line
// var removeFriend = document.querySelector("#remove")
// ye  #remove button k liye jab hum do button pe work krenge the we will use this line
// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML = "stranger"
//     istatus.style.color = "red"
// })
