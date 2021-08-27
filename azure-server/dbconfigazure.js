const  config = {
    user:  'sqladmin', // sql user
    password:  'Sqlgrupodetrabajo123', //sql user password
    server:  'serverbdd1.database.windows.net', // if it does not work try- localhost
    database:  'bddTest',
    options: {
      trustedconnection:  true,
      trustServerCertificate: true,
      enableArithAbort:  true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  1433
  }

  // https://www.telerik.com/blogs/step-by-step-create-node-js-rest-api-sql-server-database 
  
  module.exports = config;