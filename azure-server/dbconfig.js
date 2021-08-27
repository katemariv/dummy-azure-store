const  config = {
    user:  'productselaniin', // sql user
    password:  'ProductsAPI$', //sql user password
    server:  'den1.mssql7.gear.host', // if it does not work try- localhost
    database:  'productselaniin',
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