# Vue 3 + TypeScript + Vite

## Como rodar:
- Vá para o diretório e no terminal digite: cd vite-project
- Instale as dependências: npm i
- Rode o servidor: npm run dev

## App.vue
- Serve como frame principal da aplicação.
- <router-view /> é o espaço onde as páginas serão renderizadas dependendo da rota atual.
- Não contém lógica de negócio específica, apenas layout global e placeholders para as views.

## Types
- Garante tipagem forte no TypeScript, evitando erros ao acessar propriedades.
- Permite reutilização em qualquer parte do projeto.

## HomeView.vue
- Página principal da aplicação.
- Seleciona uma frase aleatória do array de frases.
- Aplica uma cor de fundo aleatória.
- Contém o link para a página “Sobre” usando Vue Router.
- Faz uso de Composition API e tipagem TypeScript.

## SobreView.vue
- Página para descrever o projeto brevemente.
- Demonstra a navegação entre páginas.
