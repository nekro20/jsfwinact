<template>
    <div>
        <img src="../assets/images/cats1.jpg" class="circle">
        <span class="title">Margo</span>
        <p>
            5 years old
            <br>
            white
        </p>
        <span class="secondary-content orange-text" style="font-size: 1.5em;">$50</span>
        <button class="btn btn-flat waves-effect secondary-content" style="border-radius: 50%; top: 41px; padding: 0 8px;" @click="">
            <i class="material-icons grey-text">delete</i></button>
    </div>
</template>

<script>
    export default {    
        name: 'cartItem'
    }
</script>