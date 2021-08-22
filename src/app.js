const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

const homeRouter = require('./router/attribute.js');

app.use(bodyParser());

app.use(homeRouter.routes()).use(homeRouter.allowedMethods());

app.listen(3000, () =>{
    console.log('服务器已经3000端口启动!')
});
