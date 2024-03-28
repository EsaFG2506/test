class FooterBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    _updateStyle() {
        this._style.textContent = `
        :host {
            color: #15F5BA;
            font-weight: bold;
            font-size: 18px;
        }
      `;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `      
        <div>
            <p>
                Submission 1 Fundamental Front-End Web Development | Esa Faizal Gibran
            </p>
        </div>
      `;
    }
}

customElements.define('footer-bar', FooterBar);