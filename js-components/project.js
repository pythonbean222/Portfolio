/*
 * Projects Component
 *
 * Creates a reusable <project> custom element that displays
 * information on a project with the following details: 
 * Project name
 * Tech stack 
 * Live link 
 * Github Link
 * Information detailing the project 
 */
class Project extends HTMLElement {
    connectedCallback() {
        const liveLink = this.getAttribute("liveLink")

        const checkLink = liveLink ?
            this.innerHTML = ` <a href=${liveLink} target="_blank">Live Link!</a> |` :
            this.innerHTML = ` `;

        const name = this.getAttribute("name")
        const stack = this.getAttribute("stack")
        const githubLink = this.getAttribute("githubLink")
        const detail = this.getAttribute("detail")

        this.innerHTML = `
        <div>
            <h3>${name}</h3>
            <h4 class="stack">${stack}</h4>

            ${checkLink}
            <a href="${githubLink}" target="_blank" rel="noopener noreferrer">
                <img class="github" src="../srcs/Index-Images/GitHub.png" alt="Github Logo" width="40" height="40">
            </a> 


            <p>${detail}<p>
        </div>
        `
    }
}

customElements.define("web-project", Project);