const Router = require('@koa/router');

const user = new Router({prefix: '/test'});

user.get('/attribute/account/list', ctx => {
    // 【get】localhost:3000/test/attribute/account/list
    console.log(ctx.query.id);
    ctx.body ={
      code:"ok",
      status: "success",
      data:{
        attributes: [
          {
            id: 1, 
            name: 'test1',
            display_name: "A",
            description: "aa",
            value_type: "STRING",
            required: false,
            unique: false,
            builtin: false,
            virtual: false
          },
          {
            id: 2, 
            name: 'test2',
            display_name: "2",
            description: "BB",
            value_type: "DATE",
            required: false,
            unique: false,
            builtin: false,
            virtual: false
          }
      ],
      }
    } 
});

user.get('/attribute/:id', ctx => {
  // 【get】localhost:3000/test/attribute/account/list
  console.log(ctx.query.id); 
  ctx.body ={
    code:"ok",
    status: "success",
    data:{
        id: 2, 
        name: 'test2',
        display_name: "2",
        description: "BB",
        value_type: "DATE",
        required: false,
        unique: false,
        builtin: false,
        virtual: false
    }
  } 
  // ctx.body ={
  //   code:"error",
  //   status: "erro",
  //   data:null
  // } 
});



module.exports = user;
