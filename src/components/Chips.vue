<script lang="ts">
export default {
    props: {
        texto: { type: String, required: true },
        ativa: { type: Boolean },
    },

    created() {
        console.log('Chips.created ativa: ' + this.ativa);
    },
};
</script>

<template>
    <!-- <p class="chip" :class="{ ativa: ativa }">{{ texto }}</p> -->
    <p :class="['chip', { ativa: ativa }]">{{ texto }}</p>
</template>

<style scoped>
.chip {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--cinza);
    background: var(--cinza-claro);
    font-weight: 400;
}

.chip.ativa {
    color: var(--creme, #fffaf3);
    background: var(--coral, #f0633c);
    font-weight: 700;
}
</style>
