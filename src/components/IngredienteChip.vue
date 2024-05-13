<script lang="ts">
import Chips from './Chips.vue';

export default {
    components: { Chips },
    props: {
        ingrediente: { type: String, required: true },
    },
    data() {
        return {
            selecionado: false as boolean,
        };
    },
    methods: {
        toogleSelecionado(): void {
            this.selecionado = !this.selecionado;
        },
    },
};
</script>

<template>
    <button @click="toogleSelecionado()" :aria-pressed="selecionado">
        <Chips :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
button {
    cursor: pointer;
}
</style>
