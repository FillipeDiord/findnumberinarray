# Busca o determinado índice do número em um Array

#### Algoritmo utilizado na busca do índice

O Algoritmo que foi utilizado é o de busca binária, que procura um elemento em um vetor ordenado
dividindo-o pela metade a cada passo. A complexidade de tempo dessa função é O(log N),
pois a cada iteração o tamanho do problema é reduzido pela metade.
Isso significa que você precisa fazer no máximo log N comparações para encontrar o elemento desejado ou determinar que ele não está no vetor.
Por exemplo, se o vetor tem 1000 elementos, você precisa fazer no máximo 10 comparações, pois 2^10 = 1024

## Tecnologias utilizadas

##### React - [Documentação](https://react.dev/learn) <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png" alt="React" width="25"/>

##### Typescript - [Documentação](https://www.typescriptlang.org/docs/) <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="Typescript" width="25"/>

##### Vite - [Documentação](https://vitejs.dev/guide/) <img src="https://pt.vitejs.dev/logo.svg" alt="Vite" width="25"/>

##### Vitest - [Documentação](https://vitest.dev/guide/) <img src="https://user-images.githubusercontent.com/11247099/145112184-a9ff6727-661c-439d-9ada-963124a281f7.png" alt="Vitest" width="25"/>

##### Tailwindcss - [Documentação](https://v2.tailwindcss.com/docs) <img src="https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png" alt="Tailwindcss" width="25"/>

## Iniciando o projeto

Após dar o git clone no seu repositório

Em sua IDE de escolha abra o projeto no diretório raiz

Abra o terminal e baixe todas as dependências necessárias

```
npm i / npm install
```

Após ter concluído a instalação das dependências

agora será necessário rodar o seguinte comando

```
npm run dev
```

O vite irá subir um servidor local no seguinte endereço

http://localhost:5173/

## Executando os testes com o Vitest

Em sua IDE de escolha abra o projeto no diretório raiz

Abra o terminal e execute o seguinte comando

```
npm run test
```

No Terminal será mostrado a execução de todos os testes
