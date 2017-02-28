<template>
    <div class="col s3">
        <ul class="collection z-depth-1">
        <li class="collection-item">
            <p>Amount range:</p>
            <div class="row" style="margin-bottom: 0">
            <div class="input-field col s6">
                <input placeholder="0" id="amountfrom" type="number" v-model="filterState.amountfrom">
                <label for="amountfrom">From</label>
            </div>
            <div class="input-field col s6">
                <input placeholder="50000" id="amountto" type="number" v-model="filterState.amountto">
                <label for="amountto">To</label>
            </div>
            </div>
        </li>
        <li class="collection-item">
            <p>Age:</p>
            <div class="row" style="margin-bottom: 0">
            <div class="input-field col s6">
                <input placeholder="0" id="agefrom" type="number" v-model="filterState.agefrom">
                <label for="agefrom">From</label>
            </div>
            <div class="input-field col s6">
                <input placeholder="20" id="ageto" type="number" v-model="filterState.ageto">
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
            <checkbox-group title="Size" :checkbox-values="['Small', 'Medium', 'Large']"></checkbox-group>
        </li>
        <li class="collection-item">
            <p>Fur density:</p>
            <p>
            <select v-model="selected">
                <option>Any</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            </p>
        </li>
        <li class="collection-item">
            <checkbox-group title="Fur color" :checkbox-values="['Black', 'White', 'Red', 'Gray']"></checkbox-group>
        </li>
        <li class="collection-item center-align">
            <button class="btn btn-flat waves-effect" style="width: 100%" @click="filterCats">Apply filters</button>
        </li>
        </ul>
    </div>
</template>

<script>
    import checkboxGroup from './checkboxGroup.vue'
    import Vue from 'vue'

    export default {    
        name: 'filterPanel',
        data: function () {
            return {
                filterState: {
                    furDensity: 'Any'
                },
                selected: null
            }
        },
        components: {checkboxGroup},
        methods: {
            filterCats: function() {
                console.log(this.selected);
            }
        }
    }
</script>