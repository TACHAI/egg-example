'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const sql = app.mysql.select('article');
    ctx.body = 'hi, egg';

    const res = await ctx.service.product.index();
    // ctx.body = res;
    await ctx.render('index.html',{
      res
    })
  }
}

module.exports = HomeController;
