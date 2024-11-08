# MyFilms

**Link:** https://myfilms.onrender.com/

## English:

MyFilms is an app with responsive design that make a request to OMDb API based on the user’s choice of a film/series and shows all the options that matches that query.

**Used Technologies:**
* **Front-end:** HTML, CSS, JavaScript 
* **Back-end:** Node.js, Express.js 
* **Consuming of API:** Axios

### Instructions:

To run the app locally, follow these steps:

1 - To make the requests to the OMDb API, firstly it's necessary register on the OMDb website  (https://www.omdbapi.com/) and write down the API Key. **Your API key is confidential. Do not share!**

2 - Create a file config.js in the main directory of the application with the following code: 
`const  config  = {
apiKey:  "Coloque sua chave de API aqui",
}
export  default  config;` 

3 - Replace the "Put your API key here" line with your API key in quotation marks. Ex: apiKey: "123456".

4 - Be sure you have Node.js installed on your machine. In the terminal run `npm i` to install node dependencies in the project.

5 - Run `nodemon index.js` to start the server. (Nodemon automatically restarts the server everytime you make changes on code)

6 - Access the app at [http://localhost:3000/](http://localhost:3000/).

 
## Português:

MyFilms é um aplicativo com design responsivo que realiza uma requisição para a API do OMDb baseada em uma escolha de filme/série do usuário e mostra todas as opções que correspondem a consulta realizada.

**Tecnologias Utilizadas:**
* **Front-end:** HTML, CSS, JavaScript 
* **Back-end:** Node.js, Express.js 
* **Consumo de API:** Axios

### Instruções:

Para rodar a aplicação localmente, siga os passos seguintes:

1 - Para fazer as requisições ao servidor da OMDb, primeiro é necessário realizar o cadastro no site da OMDb (https://www.omdbapi.com/) e anotar a chave da API (API Key).  **Sua chave API é confidencial. Não a compartilhe!**

2 - Crie um arquivo config.js no diretório principal da aplicação com o seguinte código: 
`const  config  = {
apiKey:  "Coloque sua chave de API aqui",
}
export  default  config;` 

3 - Substitua o trecho "Coloque sua chave de API aqui" pela sua chave API dentro de aspas. Ex: apiKey: "123456".

4 - Certifique-se de ter o Node.js instalado em sua máquina. No terminal execute `npm i` para instalar as dependências do Node no projeto.  

5 - Execute `nodemon index.js` para iniciar o servidor. (Nodemon automaticamente reinicia o servidor toda vez que você realiza mudanças no código)

6 - Acesse a aplicação em [http://localhost:3000/](http://localhost:3000/).
