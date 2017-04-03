class CartPage extends Polymer.Element {
    static get is() { return 'cart-page'; }

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

    static get observers() { return [ '_checkItemsCheckoutStatus(items.*)' ] }

    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
    }

    getCheckoutItemsSum(items) {
        var items = items && items.base;
        return items && items.filter((item) => item.isInCart).map((item) => item.price).reduce((previous, next) => previous + next, 0);
    }

    removeCheckoutItem(event) {
        var itemIndex = this.items.findIndex((item) => item.id === event.model.item.id);
        this.set(`items.${itemIndex}.isInCart`, false);
    }

    checkoutItems() {
        var index = this.items.findIndex((item) => item.isInCart);
        while(index != -1) {
            this.splice("items", index, 1);
            index = this.items.findIndex((item) => item.isInCart);
        }
    }

    isInCart(item) {
        return item.isInCart;
    }

    _checkItemsCheckoutStatus(newValue) {
        var isCartEmpty = newValue.base.every((item) => !item.isInCart);
        if (isCartEmpty) {
            this.dispatchEvent(new CustomEvent('cart-empty', {
                bubbles: true
            }));
        }
    }

    _getFurColorsString(item) {
        return item.furColor.join(' ,');
    }
}

// Register custom element definition using standard platform API
customElements.define(CartPage.is, CartPage);