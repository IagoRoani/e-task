const express = require('express');
const router = express.Router();


function execSQLQuery(sqlQry, res) {
    global.conn.request()
        .query(sqlQry)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}
router.get("/", (req, res) => {
    
    execSQLQuery("SELECT * FROM [dbo].[Cliente]", res); 

})

router.get('/autenticar/:email?/:senha?', function(req, res, next) {
	
    let filterEmail = ''; if (req.params.email) filterEmail = "where email='" + req.params.email+"'";
    let filterSenha = ''; if (req.params.senha) filterSenha = " and senha ='" + req.params.senha+"'";
    var sqlQuery = ` SELECT * FROM [dbo].[Cliente] ${filterEmail} ${filterSenha}`;
    console.log(sqlQuery);
    execSQLQuery("SELECT * FROM [dbo].[Cliente] " + filterEmail , res) 
});


router.get('/autenticar/:email?', function(req, res, next) {
	
    let filterEmail = ''; if (req.params.email) filterEmail = "where email='" + req.params.email+"'";
    let filterSenha = ''; if (req.params.senha) filter = " and senha ='" + req.params.senha+"'";
    var sqlQuery = ` SELECT * FROM [dbo].[Cliente] ${filterEmail} ${filterSenha}`;
    console.log(sqlQuery);
    execSQLQuery("SELECT * FROM [dbo].[Cliente] " + filterEmail , res) 
});

module.exports = router;