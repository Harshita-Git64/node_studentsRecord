var http=require("http");


 const asyncfunc=async()=>{
    const fetch = (await import('node-fetch')).default;
    const api=await fetch("https://jsonplaceholder.typicode.com/todos/")
    const data= await api.json();
    console.log(data)
    return data;
}
var server=http.createServer(async(req,res)=>{
    if(req.url==="/")
        {
            res.end("Hello, this is home pagesss");
        }
        else if(req.url==="/api")
        {
         try{
             const apidata =await asyncfunc();
             res.end (JSON.stringify(apidata));
         }
         catch(ex)
         {
             console.log("error....")
         }
        }

       else if(req.url==="/apis"){
         res.end("anything")
        }
        else{
            res.end("error page not found!!")
        }
}).listen(3001,()=>{console.log("port is running...")})

