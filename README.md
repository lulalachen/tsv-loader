# TSV Loader

## Description
This module process data with whitespaces and transform them into organized json style data.
The project use bluebird as Promise.

## Download
```
npm install tsv-loader --save
```

## Sample Code
```
var tsvLoader = require('tsv-loader');

tsvLoader('./test.dta')
.then(function(data){
  console.log(data);
});
```

## Sample Input
```
   9.0000000e+00   2.7217773e-01  -4.8479375e+00
   6.0000000e+00   2.6513281e-01  -5.1020000e+00
   3.0000000e+00   3.3592578e-01  -2.9215625e+00
```

## Sample Output
```
[ [ '9.0000000e+00', '2.7217773e-01', '-4.8479375e+00' ],
  [ '6.0000000e+00', '2.6513281e-01', '-5.1020000e+00' ],
  [ '3.0000000e+00', '3.3592578e-01', '-2.9215625e+00' ] ]
```

