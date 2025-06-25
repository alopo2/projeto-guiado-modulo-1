# API criada como exercício do curso Aprofunda da Pretalab

## Contexto

API criada para praticar conceitos de API RESTful, CRUD durante o módulo I do curso de backend ofertado pela pretalab
ministrado pela professora Jaqueline Almeida.

## Tecnologias utilizadas

- Node.js
- Express.js
- Nodemon
- Cors

## Instalação

Clone este repositório:

``git clone + endereço do repositório``

Entre na pasta do projeto:

``cd nome-da-pasta``

Instale as dependências:

``npm install``

Inicie o servidor:

``npm start``

## Rotas

Nessa API, temos as seguintes rotas:

- **GET /tasks**: Retorna todas as tarefas.
- **GET /tasks/:id**: Retorna uma tarefa específica pelo ID.
- **POST /tasks**: Cria uma nova tarefa.
- **PUT /tasks/:id**: Atualiza uma tarefa específica pelo ID.
- **DELETE /tasks/:id**: Deleta uma tarefa específica pelo ID.

## Testes utilizando o Thunder Client: 

### GET /tasks

![retorna todas as tarefas criadas](image-1.png)

### GET /tasks/:id

![retorna uma tarefa por meio de seu ID](image-2.png)

### POST /tasks

![testando a rota de criação de tarefas](image.png)

```json
{
  "title": "Nova Tarefa",
  "description": "Descrição da nova tarefa"
}
```

### PUT /tasks/:id

Tarefa de número 2 atualizada com sucesso:

![atualiza a segunda tarefa com o texto correto](image-5.png)

Retorno do GET /tasks após a atualização da tarefa de número 2:

![retorno da rota GET tasks após a atualização da tarefa número 2](image-6.png)

### DELETE /tasks/:id

Tarefa de número 2 deletada com sucesso:

![deleta a tarefa de número 2](image-3.png)

Retorno do GET /tasks após a deleção da tarefa de número 2:

![rota GET com a ausência da tarefa numero 2 que foi deletada](image-4.png)

Projeto desenvolvido com muito carinho e dedicação, espero que gostem! 😊
