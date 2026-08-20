function maxRetryTracker(max)
{
    let attempts=0;
function tryAgain(testName)
{
    attempts++;
    if (attempts>max)
    {
        return `${testName} exceeded max retries (${max})`;
    };
    return `Attempt ${attempts}/${max} for ${testName}`
}
return  tryAgain;
}
let runTcRetry=maxRetryTracker(3);
console.log(runTcRetry("login"));
console.log(runTcRetry("login"));
console.log(runTcRetry("login"));
console.log(runTcRetry("login"));