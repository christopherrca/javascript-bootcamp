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
            // console.log(this.responseText)
            const users = JSON.parse(this.responseText)

            let output = "";

            users.forEach(function(user) {
                output += `
                <hr>
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>AGE: ${user.age}</li>
                    <li>Email: ${user.email}</li>

                </ul>

                `
            })


            document.querySelector("#users").innerHTML = output
        }
    }

    http.send()


}