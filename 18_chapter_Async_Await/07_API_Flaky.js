let attempt=0;
function flakyAPI()
{attempt++;
    if (attempt<=3)
    {
        return Promise.resolve("attempt "+attempt+" :success");
    }
    else{
         return Promise.reject("attempt "+attempt+" :failed");
    }}
    async function retryTesting(maxRetries)
    {
        for (let i=1; i<=maxRetries ; i++)
        {
            try{
                let result= await flakyAPI();
                console.log('pass promise, I will exit also',result);
            }
            catch(error)
            {
                console.log('fail promise ',error);
            }}}
retryTesting(5);