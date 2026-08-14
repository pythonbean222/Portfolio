/*
 * Stack Component
 *
 * Creates a reusable <web-stack> that displays an 
 * image of the stack inserted
 */
class Stack extends HTMLElement {
    connectedCallback() {

        const stack = this.getAttribute("stack")
        const link = this.getAttribute("link")
        const image = this.getAttribute("image")

        this.innerHTML = `
        <p>
            <a href="${link}" target="_blank" rel="noopener noreferrer">
                <i style="font-size:60pt;" class="${image}"></i>
            </a>
        </p>
        `
    }
}

customElements.define("web-stack", Stack);