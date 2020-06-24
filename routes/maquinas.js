const express = require('express');
const router = express.Router();

function execSQLQuery(sqlQry, res) {
    global.conn.request()
        .query(sqlQry)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}

router.get("/", (req, res) => {
    
    execSQLQuery("SELECT * FROM dbo.Maquina", res); 

})

router.get("/maquina-usuario/:id?", (req, res) => { // DESKTOP-I3UCK4H
    let filter = ''; if (req.params.id) filter = "WHERE nome_Maquina ='" + req.params.id+"'";
    execSQLQuery("SELECT * FROM Maquina  " + filter, res) 
})

router.get("/nome-maquina/:id?", (req, res) => { // DESKTOP-I3UCK4H
    let filter = ''; if (req.params.id) filter = "WHERE fk_Cliente =" + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM Maquina  " + filter, res)
})



module.exports = router;