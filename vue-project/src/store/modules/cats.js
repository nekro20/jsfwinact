import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
};

// getters
const getters = {
  allCats: state => state.all
};

// actions
const actions = {
  getAllCats ({ commit }) {
    shop.getCats().then(cats => {
      commit(types.RECEIVE_CATS, { cats: cats.body })
    })
  }
};

// mutations
const mutations = {
  [types.RECEIVE_CATS] (state, { cats }) {
    state.all = cats
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all = state.all.filter(p => p.id !== id)
  },

  [types.FILTER_CATS] (state, { filterState }) {
    let keys = Object.keys(filterState);
    state.all = state.all.filter( cat => {
        let matchAge = cat.age >= (filterState.minAge || 0) && cat.age <= (filterState.maxAge || 20);
        let matchPrice = cat.price >= (filterState.minPrice || 0) && cat.price <= (filterState.maxPrice || 50000);
        let matchSterile = filterState.sterile ? cat.sterile : true;
        let matchSize = filterState.size.length ? filterState.size.some(cat.size) : true;
        let matchDensity = filterState.furDensity === any ? true : cat.furDensity === filterState.furDensity;
        let matchColor = filterState.color.length ? filterState.color.some(cat.color) : true;

        return matchAge && matchPrice && matchSterile && matchSize && matchDensity && matchColor;

    })
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
