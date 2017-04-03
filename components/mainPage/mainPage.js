class MainPage extends Polymer.Element {
    static get is() { return 'main-page'; }

    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
    }

    showThumbnailDetail(event) {
        this.selectedItem = event.detail.item;
        this.goToDetailPage();
    }

    getCartAmount(items) {
        var itemsInCart = items && items.base.filter((item) => item.isInCart);
        return itemsInCart.length ? `${itemsInCart.length} items` : 'Cart is empty';
    }

    onAddToCart(event) {
        var checkoutItem = event.detail.item;
        var checkoutItemIndex = this.items.findIndex((cat) => cat.id == checkoutItem.id);
        if (checkoutItemIndex > -1) {
            this.set(`items.${checkoutItemIndex}.isInCart`, true);
        }
    }

    goToCartPage() {
        this.set('routeData.page', 'cart');
    }

    goToSearchPage() {
        this.set('routeData.page', 'search');
    }

    goToDetailPage() {
        this.set('routeData.page', 'detail');
    }
}

// Register custom element definition using standard platform API
customElements.define(MainPage.is, MainPage);