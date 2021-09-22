//(function (exports, require, module, __filename, __dirname){
    console.log(__filename);
    console.log(__dirname);

    var url = "http://mylogger.io/log";

    function log(message)
    {
        // send an HTTP request
        console.log(message);
    }

    function log2(message)
    {
        // send an HTTP request
        console.log(message);
    }

    module.exports = log2;

    module.exports.log = log; // log function of this file is exported
    // in the name of log
    //module.exports.endPoint = url; // url variable of this file is exported
    // in the name of endPoint
//})