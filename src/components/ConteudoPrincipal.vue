<script lang="ts">
export default {
    data() {
        return {
            ingredientes: [
                { id: 1, item: 'Alho' },
                { id: 2, item: 'Manteiga' },
                { id: 3, item: 'Oregano' },
            ] as Array<{ id: number; item: string }>,
        };
    },
};
</script>

<template>
    <main class="conteudo-principal">
        <section>
            <span class="subtitulo-lg sua-lista-texto">Sua lista:</span>

            <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
                <li class="ingrediente" v-for="ingrediente in ingredientes" :key="ingrediente.id">{{ ingrediente.item }}</li>
            </ul>

            <p v-else class="paragrafo lista-vazia">
                <img src="../assets/images/icones/lista-vazia.svg" aria-hidden="true" />
                Sua lista está vazia, selecione ingredientes para iniciar.
            </p>
        </section>
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

.ingrediente {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--creme, #fffaf3);
    background: var(--coral, #f0633c);
    font-weight: 700;
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
