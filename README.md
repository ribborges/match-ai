# Desafio prático LEGAL.AI - match.ai: Encontre pessoas com os mesmos interesses que você

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Detalhes Técnicos do Projeto](#detalhes-técnicos-do-projeto)
- [Instruções](#instruções)
- [Scripts Disponíveis](#scripts-disponíveis)
- [O que você faria diferente se tivesse mais tempo?](#o-que-você-faria-diferente-se-tivesse-mais-tempo)

## Sobre o Projeto

Desafio técnico para vaga de Desenvolvimento Full Stack da LEGAL.AI

Deploy da aplicação: [match-ai-opal.vercel.app](https://match-ai-opal.vercel.app/)

## Pré-requisitos

- Node.js
- npm

## Detalhes técnicos do projeto

Foram utilizados os seguintes pacotes no desenvolvimento do APP:

- **[next.js](https://nextjs.org/)**: Framework para React desenvolvido pela Vercel.
- **[tailwindcss](https://tailwindcss.com/)**: Para estilização da aplicação e dos componentes.
- **[react-google-autocomplete](https://github.com/ErrorPro/react-google-autocomplete#readme)**: Pacote para trabalhar com serviços de localização do google maps. Foi utilizado no projeto para criar um input dinâmico de localização.
- **[react-bootstrap-icons](https://github.com/ismamz/react-bootstrap-icons#readme)**: Biblioteca de ícones em svg.
- **[clsx](https://github.com/lukeed/clsx#readme)**: Utilitário para concatenar e construir *string* para classes de forma condicional.
- **[framer-motion](https://motion.dev/)**: Biblioteca de animações para react. Utilizada no projeto para criar o card dos matches e um fundo animado.

Não foi utilizada nenhuma bibliotéca de componentes prontos, então todos os componentes utilizados foram criados e estilizados completamente do zero.

A aplicação é adaptada com os modos claro e escuro, seguindo as preferências do browser do usuário.

Além disso, a plicação possui um design responsivo compativel com smartphones.

## Instruções

1. Baixe e instale [node.js](https://nodejs.org/en).

2. Crie um arquivo .env na raiz do projeto

3. Adicione as seguintes variaveis:

```
NEXT_PUBLIC_MAPS_API_KEY=<Chave da API do Google Maps>
```

4. Abra seu terminal/cmd no diretório do projeto

5. Instale as dependencias

```bash
> npm install
```

6. Rode a aplicação em ambiente de desenvolvomento
```bash
> npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

## Scripts Disponíveis

- *dev*: Rodar APP em ambiente de desenvolvimento

```bash
> npm run dev
```

- *build*: Compilar aplicação

```bash
> npm run build
```

- *start*: Rodar preview da aplicação compilada

```bash
> npm run start
```

- *lint*: Executa eslint para checagem de código

```bash
> npm run lint
```

## "O que você faria diferente se tivesse mais tempo?"

- Adicionar um backend completo com integração com IA.
- Sistema de autenticação para login de usuário.
- Adicionar banco de dados para gravar histórico de matches e favoritos.
- Funcionalidade de chat para conversar com os matches.