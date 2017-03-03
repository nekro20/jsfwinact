import shop from '../../api/shop'
import * as types from '../mutation-types'

const state = {
    added: []
};

// getters
const getters = {
    cartLength: state => state.added.length,
    checkoutStatus: state => state.checkoutStatus
};

// actions
const actions = {
    checkout ({ commit, state }, cats) {
        const savedCartItems = [...state.added]
        commit(types.CHECKOUT_REQUEST)
        shop.buyCats(
            cats,
            () => commit(types.CHECKOUT_SUCCESS),
            () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
        )
    }
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

    [types.CHECKOUT_SUCCESS] (state) {
        state.checkoutStatus = 'successful'
    },

    [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
        // rollback to the cart saved before sending the request
        state.added = savedCartItems;
        state.checkoutStatus = 'failed'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
