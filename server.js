const express = require("express"),
          app = express(),
          port = 8000,
          DB_NAME = "wolfdb";

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.set('views' , __dirname + '/views');
app.set('view engine' , 'pug');


require('./route/mongoose')(DB_NAME);
require('./route/routes')(app);

app.listen(port, function() {
    
});