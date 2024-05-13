<script lang="ts">
import Chips from './Chips.vue';

export default {
    components: { Chips },
    props: {
        ingrediente: { type: String, required: true },
    },
    data() {
        return {
            selecionado: false,
        };
    },
    methods: {
        handleSelecionado(): void {
            this.selecionado = !this.selecionado;

            if (this.selecionado) {
                this.$emit('adicionarIngrediente', this.ingrediente);
            } else {
                this.$emit('removerIngrediente', this.ingrediente);
            }
        },
    },
    emits: ['adicionarIngrediente', 'removerIngrediente'],
    updated() {
        console.log('IngredienteChip.updated selecionado: ' + this.selecionado);
    },
};
</script>

<template>
    <button @click="handleSelecionado()" :aria-pressed="selecionado">
        <Chips :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
button {
    cursor: pointer;
}
</style>
