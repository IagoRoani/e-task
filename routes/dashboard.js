const express = require('express');
const router = express.Router();


function execSQLQuery(sqlQry, res) {
    global.conn.request()
        .query(sqlQry)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}


router.get("/", (req, res) => {
    execSQLQuery("SELECT * FROM Dashboard", res);
})

router.get("/maquina/:id?", (req, res) => { 
    let filter = ''; if (req.params.id) filter = " WHERE fk_Maquina = " + parseInt(req.params.id);
    execSQLQuery("SELECT  nome_Maquina, D.* FROM [dbo].[Dashboard] as D, [dbo].[Maquina] " + filter, res)
})

module.exports = router;