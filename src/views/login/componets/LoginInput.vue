<template>
    <div :class="data.disabled || data.value ? 'cd-index-input input-focus' : focusState">
        <el-input
                :prefix-icon="data.icon"
                :id="id"
                :type="data.type ? data.type : 'text'"
                v-model="data.value"
                autocomplete="off"
                spellcheck="false"
                @focus="focusState = 'cd-index-input input-focus'"
                @blur="blur"
                :disabled="data.disabled ? data.disabled : false"
        />
        <label :for="id">{{ data.text }}</label>
    </div>
</template>

<script>
    export default {
        name: "LoginInput",
        props: {
            data: Object
        },
        data() {
            return {
                id: 'input-' + Math.random(),
                focusState: 'cd-index-input',
            };
        },
        methods: {
            blur() {
                if (this.data.value) {
                    this.focusState = 'cd-index-input input-focus';
                } else {
                    this.focusState = 'cd-index-input';
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .cd-index-input{
        width: 100%;
        height: 40px;
        position: relative;
        /*border-bottom: 1px solid #eee;*/
        margin-top: 20px;
        overflow: unset!important;
        span, label {
            color: #b8b7b7;
        }
        label {
            color: #b8b7b7;
            position: absolute;
            left: 35px;
            font-size: 14px;
            top: 10px;
            cursor: text;
            -webkit-transition:all .35s;
            -moz-transition:all .35s;
            -o-transition:all .35s;
        }
        img {
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
    }
    .input-focus label{
        top: -20px!important;
        color: #5b5bea!important;
        font-size: 12px!important;
    }
</style>