var tsvLoader = require('../index');

tsvLoader('./src/test.dta')
.then(function(data){
  console.log(data);
})