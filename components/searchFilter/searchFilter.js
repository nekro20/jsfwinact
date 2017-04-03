class SearchFilter extends Polymer.Element {
    static get is() { return 'search-filter'; }

    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
    }

    onSubmit() {
        this.dispatchEvent(new CustomEvent('submit', {
            'detail': {
                amountTo: this.$.amountTo.value,
                amountFrom: this.$.amountFrom.value,
                ageFrom: this.$.ageFrom.value,
                ageTo: this.$.ageTo.value,
                isKitten: this.$.isKitten.checked,
                sizes: {
                    small: this.$.isSmall.checked,
                    medium: this.$.isMedium.checked,
                    large: this.$.isLarge.checked,
                },
                furDensity: this.$.furDensity.value,
                colors: {
                    isBlack: this.$.isBlack.checked,
                    isWhite: this.$.isWhite.checked,
                    isRed: this.$.isRed.checked,
                    isGray: this.$.isGray.checked,
                    isTabby: this.$.isTabby.checked
                }
            }
        }));
    }
}

// Register custom element definition using standard platform API
customElements.define(SearchFilter.is, SearchFilter);