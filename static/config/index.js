/**
 * 开发环境
 */
;
(function() {
    window.SITE_CONFIG = {};

    // api接口请求地址
    // window.SITE_CONFIG['baseUrl'] = 'http://47.115.178.9:88/api';
    window.SITE_CONFIG['baseUrl'] = 'http://47.112.254.45:88/api';

    // cdn地址 = 域名 + 版本号
    window.SITE_CONFIG['domain'] = './'; // 域名
    window.SITE_CONFIG['version'] = ''; // 版本号(年月日时分)
    window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;
})();