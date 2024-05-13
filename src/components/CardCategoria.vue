<script lang="ts">
import type { Categoria } from '@/interfaces/interfaces';
import type { PropType } from 'vue';
import IngredienteChip from './IngredienteChip.vue';

export default {
    props: {
        categoria: { type: Object as PropType<Categoria>, required: true },
    },

    components: { IngredienteChip },
    methods: {
        adicionarIngrediente(event: string): void {
            console.log('CardaCategoria.handleSelecionado: ' + event);
            this.$emit('adicionarIngrediente', event);
        },

        removerIngredienteLista(event: string) {
            console.log('CardaCategoria.removerIngrediente: ' + event);
            this.$emit('removerIngrediente', event);
        },
    },
    emits: ['adicionarIngrediente', 'removerIngrediente'],
};
</script>

<template>
    <article class="categoria">
        <header class="categoria__cabecalho">
            <img :src="`/images/icons/categorias_ingredientes/${categoria.imagem}`" :alt="categoria.nome" class="categoria__imagem" />
            <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
        </header>

        <ul class="categoria__ingredientes">
            <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
                <IngredienteChip
                    :ingrediente="ingrediente"
                    @adicionar-ingrediente="adicionarIngrediente($event)"
                    @remover-ingrediente="removerIngredienteLista($event)"
                />
            </li>
        </ul>
    </article>
</template>

<style scoped>
.categoria {
    width: 19.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background: var(--branco, #fff);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.categoria__cabecalho {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.categoria__imagem {
    width: 3.5rem;
}

.categoria__nome {
    text-align: center;
    color: var(--verde-medio, #3d6d4a);
    font-weight: 700;
}

.categoria__ingredientes {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}
</style>
