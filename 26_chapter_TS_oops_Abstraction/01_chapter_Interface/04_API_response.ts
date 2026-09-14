// interface are used in APITesting
interface APIresponse{
    statuscode:number;
    body:string;
    headers:object;
    header1?:object;//? means it is optional.
    responseTime:number;
}
let ResponseData:APIresponse={
    statuscode:200,
    body:"{}",
    headers:{},
    responseTime:200
}
console.log("status: ",ResponseData.statuscode);
console.log("Body: ",ResponseData.body);
console.log("Headers: ", ResponseData.headers);
console.log("responseTime: ", ResponseData.responseTime);