/*
 * Header Component
 *
 * Creates a reusable <web-header> custom element that displays
 * "Bryanna Rosales-Hernandez" using a typewriter animation.
 */

class Header extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <h1 id="name" class="name"></h1>
        `;

        var i = 0;
        var txt = "Bryanna Rosales-Hernandez";
        var speed = 50;

        function typewriter() {
            if (i < txt.length){
                document.getElementById("name").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typewriter,speed);
            }
        }
        typewriter();
    }
}

customElements.define("web-header", Header);