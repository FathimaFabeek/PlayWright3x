let checkAuth=Promise.resolve("Auth OK");
let checkDB=Promise.resolve("DB  OK");
let checkcache=Promise.resolve("Cache OK");
Promise.all([checkAuth, checkDB, checkcache]).then(function(results)
    {
        console.log("All Checks : ", results);
    }
);// output will be All Checks :  [ 'Auth OK', 'DB  OK', 'Cache OK' ],bcz every output is true
// if anything fails
Promise.all(
    [Promise.resolve("ok"),
        Promise.reject("DB Down"),
        Promise.resolve("Ok")]
).then(function(r){console.log(r);})
.catch(function(err){console.log("failed",err)});


