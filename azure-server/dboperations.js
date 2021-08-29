var USE_AZURE = process.env.USE_AZURE || 0;
let QUERY_STR = "";

if(USE_AZURE == 1){
    var config = require('./dbconfigazure');
    QUERY_STR = "SELECT ProductID, Name, ProductNumber, Color, StandardCost, ListPrice from bddTest.SalesLT.Product";
}else{
    var config = require('./dbconfig');
    QUERY_STR = "SELECT * from Products";
}

const sql = require('mssql');

async function getProducts() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query(QUERY_STR);
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts: getProducts,
}