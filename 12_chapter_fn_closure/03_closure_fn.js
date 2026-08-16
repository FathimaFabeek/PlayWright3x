function outer() {
    let name="pramod";
    function inner() {
        console.log(name); // can access outer function variable it is closure function. It will give output pramod
    }
    return inner;
}
const greet=outer();
greet(); // Output: pramod

function startBrowser() {
    let name="edge";
    function installBrowser()
    {
console.log(name);
    }
    return installBrowser;}
    const RunTc=startBrowser();
        RunTc();