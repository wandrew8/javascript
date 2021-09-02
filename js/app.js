// //Global Variables
// const template = document.querySelector('#first-template');
// const container = document.querySelector("#container");
// const clone = template.content.firstElementChild.cloneNode(true);
// const clone2 = template.content.cloneNode(true);

// //Event listeners
// clone.addEventListener("click", function () {
//     console.log("You clicked the first clone");
// })

// clone2.addEventListener("click", function () {
//     console.log("You clicked the second clone");
// })


// //Appends the template element to the DOM
// container.appendChild(clone);
// container.appendChild(clone2);

class HelloWorld extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const heading = document.createElement('h2');
        heading.textContent = "Hello World!";
        shadow.appendChild(heading);
    }
}

customElements.define("hello-world", HelloWorld);


