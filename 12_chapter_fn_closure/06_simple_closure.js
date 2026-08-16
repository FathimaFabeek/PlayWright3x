function maxRateLimiter(limit)

{
let call=0;
function check()
{
    call++;
    return call<=limit;

}
return check;
}
let limiter=maxRateLimiter(3);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());