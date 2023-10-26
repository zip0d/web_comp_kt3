class CardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                /* Вставьте стили из файла card-component.css здесь */
                .card {
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    padding: 20px;
                    margin: 20px;
                    width: 300px;
                }

                .card h2 {
                    color: #333;
                }

                .card p {
                    color: #666;
                }
            </style>
            <div class="card">
                <div class="header">
                    <slot name="header"></slot>
                </div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </div>
        `;
    }
}

customElements.define('card-component', CardComponent);
