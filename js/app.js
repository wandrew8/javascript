//Global Variables
const mainButton = document.querySelector('#click');

//Functions
function doCoolThing() {
    const title = document.querySelector('h1');
    title.textContent = "Hello!"
}

// Event Listeners
mainButton.addEventListener('click', doCoolThing)