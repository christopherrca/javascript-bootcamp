// Load all users


const btn = document.querySelector("#btn");
btn.addEventListener("click", getUsers)

// CREATE Function Get Users

function getUsers(e) {
    e.preventDefault()
    // console.log("hello")

    const http = new XMLHttpRequest();
    http.open("GET", "users.json", true);
    http.onload = function () {
        if(this.status === 200) {
            console.log(this.responseText)
        }
    }

    http.send()


}