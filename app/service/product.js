const Service = require('egg').Service;

class ProductService extends Service {
  async index() {
    const sql = await this.app.mysql.select('card');

    return {
      id: 100,
      name: '测试',
      sqlres: sql,
    }
  }
}

module.exports = ProductService;
