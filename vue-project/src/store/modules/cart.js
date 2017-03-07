import * as types from '../mutation-types'

const state = {
    added: []
};

// getters
const getters = {
    cartLength: state => state.added.length,
    checkoutStatus: state => state.checkoutStatus
};

// mutations
const mutations = {
    [types.ADD_TO_CART] (state, { id }) {
        state.added.push({ id })
    },

    [types.REMOVE_CAT_FROM_CART] (state, { id }) {
        const index = state.added.findIndex(cat => cat.id === id);
        state.added.splice(index, 1)
    },

    [types.CHECKOUT_REQUEST] (state) {
        // clear cart
        state.added = [];
        state.checkoutStatus = null
    },

    [types.CHECKOUT_SUCCESS] () {
        console.log('successful');
    },

    [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
        // rollback to the cart saved before sending the request
        state.added = savedCartItems;
        console.log('failed');
    }
}

export default {
    state,
    getters,
    mutations
}
