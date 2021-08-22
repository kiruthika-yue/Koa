const Router = require('@koa/router');

const user = new Router({prefix: '/test'});

user.get('/all', ctx => {
    // 【get】localhost:3000/api/users/all?id=1
    console.log(ctx.query.id);
    ctx.body = [
        {id: 1, name: '111'},
        {id: 2, name: '222'},
        {id: 3, name: '333'}
    ];
});

user.get('/:id', (ctx, next) => {
    // 【get】localhost:3000/api/users/123
    console.log(ctx.params.id);
    ctx.body = [
        {id: 1, name: '111'},
        {id: 2, name: '222'},
        {id: 3, name: '333'}
    ];
});

user.post('/', ctx => {
    // 【post】localhost:3000/api/users
    /*
        {
            "name": "Hal",
            "age": "30"
         }
     */

    ctx.body = ctx.request.body;
});

user.put('/', ctx => {
    console.log(ctx.header.token);
    ctx.body = {
        code: 200,
        message: '修改成功'
    };
})


module.exports = user;
