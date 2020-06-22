const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');
const sql = require('mssql');
const config = {
    user: "etask",  //User name de acesso 
    password: "#Gfgrupo5", //Senha de aceso
    server: 'srvetask.database.windows.net', //Nome do Servidor
    database: 'bdEtask', //Banco de dados utilizado
    options: {
        encrypt: true
    }
}
app.use(cors());



sql.connect(config)
    .then(conn => global.conn = conn)
    .catch(err => console.log("Erro ao conectar no banco"));

function execSQLQuery(sqlQry, res) {
    global.conn.request()
        .query(sqlQry)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}
//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

//Essencial criar um model para tipar os dados da api

router.get("/", (req, res) => res.json({ Routes_API: "Teste colocar /Clientes na url (/Maquinas,/Jogos,/Dashboard)" }))

router.get("/clientes", (req, res) => { execSQLQuery("SELECT * FROM dbo.Cliente", res); }) //Rota para acessar dados dos clientes

router.get("/Maquinas", (req, res) => { execSQLQuery("SELECT * FROM dbo.Maquina", res); })

router.get("/dashboard", (req, res) => { execSQLQuery("SELECT * FROM dbo.Dashboard", res); })

router.get("/jogos", (req, res) => { execSQLQuery("SELECT * FROM dbo.Jogos", res); })


app.listen(port);


app.use('/', router)


console.log("Banco conectado e api rodando")

//Filtragem de usuario por ID

router.get('/clientes/:id?', (req, res) => {
    let filter = ''; if (req.params.id) filter = 'WHERE id_Cliente=' + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM dbo.Cliente " + filter, res)
})

router.get('/jogos/:id?', (req, res) => {
    let filter = ''; if (req.params.id) filter = 'WHERE id_Jogo=' + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM dbo.Jogos " + filter, res)
})
router.get('/dashboard/:id?', (req, res) => {
    let filter = ''; if (req.params.id) filter = 'WHERE id_Registro = ' + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM dbo.Dashboard " + filter, res)
})
router.get('/maquinas/:id?', (req, res) => {
    let filter = ''; if (req.params.id) filter = 'where id_Maquina = ' + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM dbo.Maquina " + filter, res);
})

//Criando novos user 

router.post('/clientes', (req, res) => {
    const id = parseInt(req.body.id);
    const email = req.body.emailC.substring(0, 50);
    const name = req.body.nome.substring(0, 20);
    const lastName = req.body.sobrenome.substring(0, 40);
    const password = req.body.senha.substring(0, 16);
    execSQLQuery(`Insert into dbo.Cliente(email,nome,sobrenome,senha) values('${email}','${name}','${lastName}','${password}')`, res);
})


//Atualizar senha
router.patch('/clientes/:id', (req, res) => {
    const password = req.body.senha.substring(0, 16);
    execSQLQuery(`update dbo.cliente set senha=${password}`, res)
})

//Excluindo user

router.delete('/clientes/:id', (req, res) => {
    execSQLQuery('DELETE dbo.Cliente WHERE id_Cliente=' + parseInt(req.params.id), res)
})