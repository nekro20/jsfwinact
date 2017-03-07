import shop from '../../api/shop'
import * as types from '../mutation-types'
import helper from '../helperFunctions'

// initial state
const state = {
    all: [],
    cats: []
};

// getters
const getters = {
    allCats: state => state.cats
};

// actions
const actions = {
    getAllCats ({ commit }) {
        shop.getCats().then(response => {
            let cats = response.body.map(cat => {
                cat.aviable = true;
                return cat;
            });
            commit(types.RECEIVE_CATS, { cats })
        })
    }
};

// mutations
const mutations = {
    [types.RECEIVE_CATS] (state, { cats }) {
        state.all = cats;
        state.cats = cats
    },

    [types.ADD_TO_CART] (state, { id }) {
        state.cats = helper.changeState(state.cats, id, false)
    },

    [types.REMOVE_CAT_FROM_CART] (state, { id }) {
        state.cats = helper.changeState(state.cats, id, true)
    },

    [types.FILTER_CATS] (state, { filterState }) {
        let keys = Object.keys(filterState);
        state.cats = state.all.filter(cat => {
            let matchAge = cat.age >= (filterState.ageFrom || 0) && cat.age <= (filterState.ageTo || 20);
            let matchPrice = cat.price >= (filterState.amountFrom || 0) && cat.price <= (filterState.amountTo || 50000);
            let matchSterile = filterState.sterile ? cat.sterile : true;
            let matchSize = filterState.size.length ? filterState.size.some(matchEntry('size')) : true;
            let matchDensity = filterState.furDensity === 'Any' ? true : cat.furDensity === filterState.furDensity;
            let matchColor = filterState.color.length ? filterState.color.some(matchEntry('color')) : true;

            function matchEntry(entryName) {
                return function(item) {
                    return item === cat[entryName];
                }
            }

            return matchAge && matchPrice && matchSterile && matchSize && matchDensity && matchColor;

        })
    },

    [types.CHECKOUT_SUCCESS] (state) {
        state.cats = state.cats.map(cat => {
            cat.aviable = true;
            return cat;
        });
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
