function haveGlobalFunctions(name)
{
    console.log('Hello ' + name);
    //in browsers
    //window.console.log('Hello ' + name);
    //in node
    globalThis.console.log('Hello ' + name);
    // console is global object
    //setTimeout(10);
    //clearTimeout();
    // call a function repeatedly with a delay
    /*
    setInterval(() => {
        
    }, interval);
    clearInterval();
    */
   var message = '';
   console.log(globalThis.message); // undefined since message will not be added to globalThis
   console.log(module);
}

haveGlobalFunctions('Mosh');