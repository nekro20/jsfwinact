class SearchPage extends Polymer.Element {
    static get is() {
        return 'search-page';
    }

    static get properties() {
        return {
            items: {
                type: Array,
                value: function () {
                    return [];
                },
                notify: true
            }
        }
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    search(event) {
        this.$.getCatsRequest.params = event.detail;
        this.$.getCatsRequest.generateRequest();
    }

    onSearched(data) {
        this.set('items', data.detail.response);
        this.items = data.detail.response;
    }
}

// Register custom element definition using standard platform API
customElements.define(SearchPage.is, SearchPage);