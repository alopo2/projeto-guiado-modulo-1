import express from 'express'; 
import cors from 'cors';


const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const tasks = [];

//GET / Boas vindas
const mensagem = router.get('/', (_, res) => {
    res.send('Bem-vinda à API de Tarefas!');
});

//GET /tasks Retorna todas as tarefas
const getTasks = router.get('/tasks', (_, res) => {
    res.status(200).json(tasks);
});

//GET /tasks/:id Retorna uma tarefa específica
const getTaskById = router.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    res.status(200).json(task);
});

//POST /tasks Cria uma nova tarefa
const createTask = router.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Título e descrição são obrigatórios.' });
    }
    const newTask = { id: tasks.length + 1, title, description };
    tasks.push(newTask);
    res.status(201).json({ message: "Tarefa criada com sucesso!", task: newTask });
});

// Integrando as rotas ao app
app.use(getTasks);
app.use(getTaskById);
app.use(createTask);
app.use(mensagem);


app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});