class ThumbnailView extends Polymer.Element {
    static get is() { return 'thumbnail-view'; }

    static get properties() {
        return {
            items: {
                type: Array,
                value: function() {
                    return [];
                }
            }
        }
    }

    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
    }
}

// Register custom element definition using standard platform API
customElements.define(ThumbnailView.is, ThumbnailView);