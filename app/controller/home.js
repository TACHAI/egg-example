'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const sql = await this.app.mysql.select('card');
    console.log(sql)
    ctx.body = 'hi, egg';

    const res = await ctx.service.product.index();
    console.log('service==res:' + res)

    let title = '标题'
    // ctx.body = res;
    await ctx.render('index', {
      res:sql,
      title:title,
    });
  }
}

module.exports = HomeController;
