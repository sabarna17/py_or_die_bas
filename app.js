var python=require('python').shell;

var returnback = function(err, data) {
   if (err) {
     console.error(err);
   } else {
     console.log("BAS Python Reqturns : " + data);
   }
};

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(vars) {
   python(vars, returnback);
});
