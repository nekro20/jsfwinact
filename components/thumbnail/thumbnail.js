class ThumbnailInfo extends Polymer.Element {
    static get is() {
        return 'thumbnail-info';
    }

    static get properties() {
        return {
            item: Object,
            disabled: {
                type: Boolean,
                reflectToAttribute: true
            }
        }
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

    showDetailThumbnailInfo() {
        this.dispatchEvent(new CustomEvent('show-thumbnail-detail', {
            bubbles: true,
            composed: true,
            detail: {
                item: this.item
            }
        }));
    }

    _getColors(item) {
        return item.furColor.join(', ');
    }
}

// Register custom element definition using standard platform API
customElements.define(ThumbnailInfo.is, ThumbnailInfo);