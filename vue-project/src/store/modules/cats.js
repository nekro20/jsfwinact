import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allCats: state => state.all
}

// actions
const actions = {
  getAllCats ({ commit }) {
    shop.getCats().then(cats => {
      commit(types.RECEIVE_CATS, { cats: cats.body })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_CATS] (state, { cats }) {
    state.all = cats
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all = state.all.filter(p => p.id !== id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
