<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import type { Frase } from '../types/Frase'
import type { CorFundo } from '../types/CorFundo'

const frases: Frase[] = [
    { texto: 'Tudo passa.', autor: 'Alguém.'},
    { texto: 'Respira, vai dar certo.' },
    { texto: 'Um dia de cada vez.' },
    { texto: 'Você está exatamente onde precisa estar.' },
    { texto: 'Nem todo dia é bom, mas todo dia ensina.' },
    { texto: 'Confie no processo.' }
]

const cores: CorFundo[] = [
    {cor: '#FADADD'},
    {cor: '#D6EAF8'},
    {cor: '#D5F5E3'},
    {cor: '#FCF3CF'},
    {cor: '#E8DAEF'},
    {cor: '#FDEDEC'}
]

const fraseAtual: Ref<Frase | null> = ref(null)
const corFundo: Ref<string | ''> = ref('')

onMounted(() => {
  fraseAtual.value = frases[Math.floor(Math.random() * frases.length)]!
  corFundo.value = cores[Math.floor(Math.random() * cores.length)]!.cor!
})
</script>

<template>
  <div class="container" :style="{ backgroundColor: corFundo }">
    <p class="frase">"{{ fraseAtual?.texto }}"</p>
    <h6 v-if="fraseAtual?.autor">{{ fraseAtual?.autor }}</h6>
    <router-link to="/sobre">Ir para Sobre</router-link>
  </div>
</template>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.6s ease;
}

.frase {
  font-size: 1.8rem;
  text-align: center;
  font-family: system-ui, sans-serif;
  padding: 2rem;
}

a {
  margin-top: 1rem;
  text-decoration: underline;
  color: inherit;
}
</style>