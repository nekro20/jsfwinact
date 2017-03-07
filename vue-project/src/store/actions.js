import * as types from './mutation-types'
import shop from '../api/shop'

export const addToCart = ({ commit }, cat) => {
  commit(types.ADD_TO_CART, {
    id: cat.id
  })
}

export const checkout = ({ commit, state }, cats) => {
    const savedCartItems = [...state.cart.added]
    commit(types.CHECKOUT_REQUEST)
    shop.buyCats(
        cats,
        () => commit(types.CHECKOUT_SUCCESS),
        () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
}
