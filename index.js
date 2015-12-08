var tsv = require("node-tsv-json"),
    Promise = require("bluebird");

module.exports = function tsvLoad(fileName){
  return new Promise(function(resolve, reject){
    tsv({
      input: fileName,
      output: null,
      parseRows: true
    }, function(err, data) {
      if(err) {
        console.error(err);
        reject(err);
      } else {
        data.forEach(function(val, idx, data){
          data[idx] = val[0].match(/\S+/g);
          // for (var i = 0; i < data[idx].length; i++)
          //   data[idx][i] = Number(data[idx][i]);
          // data[idx].push(Number(val[1]));
        });
        resolve(data);
          // console.log(data);

      }
    });
  });
}


