const express = require('express');
const router = express.Router();


function execSQLQuery(sqlQry, res) {
    global.conn.request()
        .query(sqlQry)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}


router.get("/cpu/:id?", (req, res) => { //DESKTOP-I3UCK4H
    let filter = ''; if (req.params.id) filter = " WHERE nome_Maquina = '" + req.params.id+"'";
    var sqlQuery = "SELECT ";
    for (var i = 0; i <24; i++) {
        var pesquisa = "0";
        i <= 9 ? pesquisa = pesquisa.concat(i):pesquisa=i;
        sqlQuery += `(SELECT (AVG (desempenho_cpu)) FROM [dbo].[Dashboard]   
        WHERE data_Registro LIKE '_:${pesquisa}:__:__'  AND fk_Maquina = id_Maquina) as cpu`;
        i < 23 ? sqlQuery += ", " :sqlQuery +=" "; 
    }
    sqlQuery += "FROM Maquina "
    execSQLQuery(sqlQuery+ filter, res);
})

router.get("/ram/:id?", (req, res) => { //DESKTOP-I3UCK4H
    let filter = ''; if (req.params.id) filter = " WHERE nome_Maquina = '" + req.params.id+"'";
    var sqlQuery = "SELECT ";
    for (var i = 0; i <24; i++) {
        var pesquisa = "0";
        i <= 9 ? pesquisa = pesquisa.concat(i):pesquisa=i;
        sqlQuery += `(SELECT (AVG (desempenho_ram)) FROM [dbo].[Dashboard]   
        WHERE data_Registro LIKE '_:${pesquisa}:__:__'  AND fk_Maquina = id_Maquina) as ram`;
        i < 23 ? sqlQuery += ", " :sqlQuery +=" "; 
    }
    sqlQuery += "FROM Maquina "
    execSQLQuery(sqlQuery+ filter, res);
})

router.get("/hd/:id?", (req, res) => { //DESKTOP-I3UCK4H
    let filter = ''; if (req.params.id) filter = " WHERE nome_Maquina = '" + req.params.id+"'";
    var sqlQuery = "SELECT ";
    for (var i = 0; i <24; i++) {
        var pesquisa = "0";
        i <= 9 ? pesquisa = pesquisa.concat(i):pesquisa=i;
        sqlQuery += `(SELECT (AVG (ocupado_hd)) FROM [dbo].[Dashboard]   
        WHERE data_Registro LIKE '_:${pesquisa}:__:__'  AND fk_Maquina = id_Maquina) as hd`;
        i < 23 ? sqlQuery += ", " :sqlQuery +=" "; 
    }
    sqlQuery += "FROM Maquina "
    execSQLQuery(sqlQuery+ filter, res);
})

router.get("/gpu/:id?", (req, res) => { //DESKTOP-I3UCK4H
    let filter = ''; if (req.params.id) filter = " WHERE nome_Maquina = '" + req.params.id+"'";
    var sqlQuery = "SELECT ";
    for (var i = 0; i <24; i++) {
        var pesquisa = "0";
        i <= 9 ? pesquisa = pesquisa.concat(i):pesquisa=i;
        sqlQuery += `(SELECT (AVG (desempenho_GPU)) FROM [dbo].[Dashboard]   
        WHERE data_Registro LIKE '_:${pesquisa}:__:__'  AND fk_Maquina = id_Maquina) as gpu`;
        i < 23 ? sqlQuery += ", " :sqlQuery +=" "; 
    }
    sqlQuery += "FROM Maquina "
    execSQLQuery(sqlQuery+ filter, res);
})



module.exports = router;