<div align="center">
  <h1>
    <img src="https://user-images.githubusercontent.com/71537090/201371017-760b1bf0-b7bc-4a51-9de2-8f32d9c74505.svg" />
  </h1>
  
  > ⚽ Plataforma de criação de bolões onde é possível criar um bolão pela web ou pelo smartphone usando o app NLW Copa
  
  <p align="center">
    <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-projetos">Projetos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-contatos">Contato</a>
  </p>
  
  <br />
  
  <img src="https://user-images.githubusercontent.com/71537090/201370890-378d37c8-067b-478f-8bf3-f65e359686b8.png" />
</div>

## ✨ Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io/)
- E muitas outras…

## 💻 Projetos

Essa NLW-10 contou com 3 projetos incríveis que foram desde backend, passando pelo frontend e finalizando seu desenvolvimento no mundo mobile.
E para cada uma delas temos um modo específico de executar cada projeto. Então vamos à explicação

### Backend

Para executar o projeto backend siga os seguintes passos:

- Instale os pacotes com `npm install`.
- Faça uma copia do arquivo `.env.example` para `.env` e altere o caminho do banco de dados caso necessário.
- Execute `npx prisma migrate dev` para rodar as migrations. (Esse comando também já vai executar as seeds)
- Execute `npm run dev` para iniciar o servidor.

### Frontend

**Para que esse projeto funcione corretamente, é preciso estar com o servidor rodando.**

- Instale os pacotes com `npm install`.
- Execute `npm run dev` para iniciar o cliente web.

Não se esqueça de alterar o caminho da sua URL da api caso tenha modificado no backend

### Mobile

**Para que esse projeto funcione corretamente, é preciso estar com o servidor rodando.**

- Instale os pacotes com `npm install`.
- Criar o app no console do google para poder ter acesso ao OAuth (<https://docs.expo.dev/guides/authentication/#google>)
- Faça uma copia do arquivo `.env.example` para `.env` e preencha corretamente com o CLIENT_ID do console do google e a API_URL que é o caminho IP do seu servidor backend.
- Execute `npx expo start -c` para iniciar o servidor do Expo.

## 🃏 Layout

Caso tenha interesse em visualizar o Layout temos o [link do figma](https://www.figma.com/file/kgbmAqY4DLEWlFQWEOzXfo/RentX-Ignite?node-id=1%3A131).

## ☕ Contatos

Você vai me encontrar em qualquer uma das redes sociais abaixo:

<a href = "mailto: leo.azannielttt@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23EA4335?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" margin-right="10px"></a>
<a href="https://www.linkedin.com/in/leandroazanniel/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>


<p align="center">Aplicação construída com 💜 por Leandro Azanniel</p>
