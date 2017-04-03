class DetailPage extends Polymer.Element {
    static get is() { return 'detail-page'; }

    static get properties() {
        return {
            item: {
                type: Object
            }
        }
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    addToCart() {
        this.dispatchEvent(new CustomEvent('add-to-cart', {
            bubbles: true,
            composed: true,
            detail: {
                item: this.item
            }
        }));
    }

    _getItemFurColor(item) {
        return item.furColor.join(', ');
    }
}

// Register custom element definition using standard platform API
customElements.define(DetailPage.is, DetailPage);