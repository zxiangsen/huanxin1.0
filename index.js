//引入express, 操作请求，响应数据，继承了路由和模板，比http强大
var express=require('express');
//声明express
var app=express();
//配置静态文件
app.use(express.static('./'));
//请求头设置
app.all('*', (req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", "3.2.1");    
    res.header('Content-type','application/json');
    next();
})

//输出端口号配置
var prots=3001;
app.listen(prots, ()=>{
    console.log('http://localhost:'+prots);
})