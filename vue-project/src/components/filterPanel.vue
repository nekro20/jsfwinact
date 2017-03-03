<template>
    <div class="col s3">
        <ul class="collection z-depth-1">
        <li class="collection-item">
            <p>Amount range:</p>
            <div class="row" style="margin-bottom: 0">
            <div class="input-field col s6">
                <input placeholder="0"
                       id="amountfrom"
                       type="number"
                       v-model.number="filterState.amountFrom">
                <label for="amountfrom">From</label>
            </div>
            <div class="input-field col s6">
                <input placeholder="50000"
                       id="amountto"
                       type="number"
                       v-model.number="filterState.amountTo">
                <label for="amountto">To</label>
            </div>
            </div>
        </li>
        <li class="collection-item">
            <p>Age:</p>
            <div class="row" style="margin-bottom: 0">
            <div class="input-field col s6">
                <input placeholder="0" id="agefrom" type="number" v-model.number="filterState.ageFrom">
                <label for="agefrom">From</label>
            </div>
            <div class="input-field col s6">
                <input placeholder="20" id="ageto" type="number" v-model.number="filterState.ageTo">
                <label for="ageto">To</label>
            </div>
            </div>
        </li>
        <li class="collection-item">
            <p>Only sterile</p>
            <p class="switch">
            <label>
                No
                <input type="checkbox" v-model="filterState.sterile">
                <span class="lever"></span>
                Yes
            </label>
            </p>
        </li>
            <li class="collection-item">
                <p>Size:</p>
                <p v-for="(size, index) in sizes">
                    <input type="checkbox" class="with-gap" name="group1" :id="'size' + index" :value="size" v-model="filterState.size"/>
                    <label :for="'size' + index" class="black-text">{{size}}</label>
                </p>
            </li>
        <li class="collection-item">
            <p>Fur density:</p>
            <p>
            <select id="material_select">
                <option>Any</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            </p>
        </li>
        <li class="collection-item">
            <p>Color:</p>
            <p v-for="(color, index) in colors">
                <input type="checkbox" class="with-gap" name="group1" :id="'color' + index" :value="color"  v-model="filterState.color"/>
                <label :for="'color' + index" class="black-text">{{color}}</label>
            </p>
        </li>
        <li class="collection-item center-align">
            <button class="btn btn-flat waves-effect" style="width: 100%" @click="filterCats">Apply filters</button>
        </li>
        </ul>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import { FILTER_CATS } from '../store/mutation-types'

    export default {    
        name: 'filterPanel',
        data: function () {
            return {
                filterState: {
                    amountFrom: null,
                    amountTo: null,
                    ageFrom: null,
                    ageTo: null,
                    furDensity: 'Any',
                    size: [],
                    color: []
                },
                sizes:  ['Low', 'Medium', 'Large'],
                colors: ['Black', 'White', 'Red', 'Gray']
            }
        },
        methods: {
            ...mapMutations([
                FILTER_CATS
            ]),
            filterCats: function() {
                this.filterState.furDensity = $("#material_select").val();
                const filterState = this.filterState;
                this.FILTER_CATS({ filterState });
            }
        }
    }
</script>