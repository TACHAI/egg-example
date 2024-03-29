
const Controller = require('egg').Controller;

class ProductController extends Controller{
  async index() {
    const { ctx } = this
    const res = await ctx.service.product.index()
    ctx.body = res;
  }

  async detail() {
    const { ctx } = this;
    console.log(ctx.query)
    ctx.body = `id==${ctx.query.id}`;
  }

  async detail2() {
    const { ctx } = this;
    console.log(ctx.params)
    ctx.body = 'info';
  }

  async create() {
    const { ctx } = this;
    console.log(ctx.request.body)
    const result = ctx.request.body
    ctx.body = {
      id: 123,
      res: result,
    };
  }
}

module.exports = ProductController;
