/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570672723101_7395';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  }

  config.view = {
    mapping: {
      '.html': 'ejs',
    }
  }


  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'hzc778209',
      database: '',
    },
    // 是否加载到app上,默认开启
    app: true,
    // 是否加载到agent上，默认关闭
    agent: false,
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
