
function handleAction() {
    console.log("XYZ")
}

const butRef = document.querySelector("button")
butRef.addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    console.log("Button clicked")
    displayName()
})

function displayName() {
    console.log("Enter")
    const usernameRef = document.getElementById("user")
    const passwordRef = document.getElementById("password")
    console.log(usernameRef.value)
    console.log(passwordRef.value)
}

