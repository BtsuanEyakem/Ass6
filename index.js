const printNumbers = function(from,to){
    let starter;
        starter = setInterval(() => {
            from++;
            console.log(from);
            if(from == to){
              clearInterval(starter);
            }
        }, 1000);
    }
printNumbers(3,7);