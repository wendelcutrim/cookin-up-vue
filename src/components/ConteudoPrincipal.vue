<script lang="ts">
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import Chips from './Chips.vue';
import MostrarReceitas from './MostrarReceitas.vue';
import type { Conteudo } from '@/interfaces/types';
import LoadingSpinner from './LoadingSpinner.vue';

export default {
    data() {
        return {
            ingredientes: [] as string[],
            conteudo: null as Conteudo,
            showLoading: true as boolean,
        };
    },
    components: { SelecionarIngredientes, Chips, MostrarReceitas, LoadingSpinner },
    methods: {
        addMeusIngredientes(ingrediente: string) {
            console.log('ConteudoPrincipal.addMeusIngredientes: ' + ingrediente);
            this.ingredientes.push(ingrediente);
        },

        removerIngrediente(ingrediente: string) {
            console.log('ConteudoPrincipal.removerIngrediente: ' + ingrediente);
            this.ingredientes = this.ingredientes.filter((i) => i !== ingrediente);
        },

        navegar(pagina: Conteudo) {
            this.conteudo = pagina;
            window.scrollTo(0, 0);
        },
    },
    beforeCreate() {
        setTimeout(() => {
            this.conteudo = 'SelecionarIngredientes';
        }, 3000);
    },

    mounted() {
        this.showLoading = false;
    },
};
</script>

<template>
    <main class="conteudo-principal">
        <section>
            <span class="subtitulo-lg sua-lista-texto">Sua lista:</span>

            <ul class="ingredientes-sua-lista" v-if="ingredientes.length > 0">
                <li v-for="ingrediente in ingredientes" :key="ingrediente">
                    <Chips :texto="ingrediente" ativa />
                </li>
            </ul>

            <p v-else class="paragrafo lista-vazia">
                <img src="../assets/images/icones/lista-vazia.svg" aria-hidden="true" />
                Sua lista está vazia, selecione ingredientes para iniciar.
            </p>
        </section>

        <KeepAlive include="SelecionarIngredientes">
            <SelecionarIngredientes
                v-if="conteudo === 'SelecionarIngredientes'"
                @adicionar-ingrediente="addMeusIngredientes($event)"
                @remover-ingrediente="removerIngrediente($event)"
                @buscar-receitas="navegar('MostrarReceitas')"
            />
        </KeepAlive>

        <MostrarReceitas v-if="conteudo === 'MostrarReceitas'" @editar-receitas="navegar('SelecionarIngredientes')" :ingredientes="ingredientes" />

        <LoadingSpinner v-if="conteudo === null" :showLoading="showLoading" />
    </main>
</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #fffaf3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

.sua-lista-texto {
    color: var(--coral, #f0633c);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}

.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #f0633c);
    text-align: center;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>
