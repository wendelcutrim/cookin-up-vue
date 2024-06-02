<script lang="ts">
export default {
    props: {
        showLoading: { type: Boolean, required: true },
    },

    data() {
        return {
            feedbackSr: '' as string,
            showFeedbckMessage: false as boolean,
        };
    },

    methods: {
        ay11feedback(text: string): void {
            this.feedbackSr = text;
        },
    },

    create() {
        this.showFeedbckMessage = true;
        this.ay11feedback('carregando');
    },

    beforeUnmount() {
        this.ay11feedback('carregado');
        this.showFeedbckMessage = false;
    },
};
</script>

<template>
    <span v-if="showFeedbckMessage" class="sr-only" role="alert">{{ feedbackSr }}</span>
    <span class="loader"></span>
</template>

<style scoped>
.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: #d1451e #d1451e transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}
.loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    border-color: transparent #3d6d4a #3d6d4a;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotationBack {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}
</style>
