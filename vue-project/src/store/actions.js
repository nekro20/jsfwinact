import * as types from './mutation-types'

export const addToCart = ({ commit }, cat) => {
  commit(types.ADD_TO_CART, {
    id: cat.id
  })
}
