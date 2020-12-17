const server = require('express');
const app = server();
const portNumber = 3000;
const sourceDir = 'dist';

//OPEN GZIP
app.use(server.static('dist'));
app.use(server.static('docs'));


app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
