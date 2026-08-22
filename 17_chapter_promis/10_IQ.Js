
Promise.resolve("Quick win").then(function (msg) {
    console.log(msg);
});

Promise.reject("Quick loss").catch(function (msg) {
    console.log(msg);
});

let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3]).then(function (results) {
    console.log(results);
});

let t4 = Promise.resolve("PASS");
let t5 = Promise.reject("FAIL");
let t6 = Promise.resolve("PASS");

Promise.all([t4, t5, t6])
    .then(function (r) { console.log("All:", r); })
    .catch(function (err) { console.log("Stopped:", err); });
// here output will be for catch, bcz .all work if all resolve. if anyone reject. it will shows only catch in output

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " → " + val);
    });
});// .all settled will shows resolve, reject in output