class report{
    generate(data)
    {
        console.log("Raw data "+ data);
    }
}
class HTMLreport extends report{
    generate (data)
    {
        console.log("<html><body>"+ data+"</body></html>");
    }
}
class JSONReport extends report{
generate (data)
    {
        console.log("Report "+ data);
    }
}
class TextReport extends report{
    generate(data){
        console.log("====REPORT==== \n"+data+"\n====");
    }
}
let reports=[new HTMLreport(), new JSONReport(), new TextReport() ];
reports.forEach(function(r)
{
    r.generate("5 tests passed, 1 failed");
    console.log("---------")
});