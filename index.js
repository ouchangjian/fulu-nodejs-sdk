
const lib = require("./lib")

const sdk = {
    init: function (config) {
        lib.updateConfig(config);
    },
    getSignWithObj: function (obj) {
        return lib.buildSign(obj);
    },
    doApiWithMethodAndBiz: function (method, biz, cb) {
        let biz_content_string = JSON.stringify(biz);
        let req = {
            method: method,
            biz_content: biz_content_string
        };
        lib.doApi(req, cb);
    },
    fuluUserInfoGet: function (cb) {
        let biz = {}
        this.doApiWithMethodAndBiz("fulu.user.info.get", biz, cb);
    },
    fuluOrderInfoGet: function (customer_order_no, cb) {
        let biz = {
            customer_order_no: customer_order_no
        }
        this.doApiWithMethodAndBiz("fulu.order.info.get", biz, cb);
    },
    fuluOrderDirectAdd: function (product_id, customer_order_no, charge_account, buy_num, cb) {
        let biz = {
            product_id: parseInt(product_id),
            customer_order_no: customer_order_no,
            charge_account: charge_account,
            buy_num: parseInt(buy_num)
        }
        this.doApiWithMethodAndBiz("fulu.order.direct.add", biz, cb);
    },
    fuluOrderCardAdd: function (product_id, customer_order_no, buy_num, cb) {
        let biz = {
            product_id: parseInt(product_id),
            customer_order_no: customer_order_no,
            buy_num: parseInt(buy_num)
        }
        this.doApiWithMethodAndBiz("fulu.order.card.add", biz, cb);
    },
    fuluOrderMobileAdd: function (charge_phone, charge_value, customer_order_no, cb) {
        let biz = {
            charge_phone: charge_phone,
            charge_phone: parseInt(charge_value),
            customer_order_no: customer_order_no
        }
        this.doApiWithMethodAndBiz("fulu.order.direct.add", biz, cb);
    },
    fuluGoodsListGet: function (cb) {
        let biz = {
        }
        this.doApiWithMethodAndBiz("fulu.goods.list.get", biz, cb);
    },
    fuluGoodsInfoGet: function (product_id, cb) {
        let biz = {
            product_id: product_id
        }
        this.doApiWithMethodAndBiz("fulu.goods.info.get", biz, cb);
    },
    fuluGoodsTemplateGet: function (template_id, cb) {
        let biz = {
            template_id: template_id
        }
        this.doApiWithMethodAndBiz("fulu.goods.template.get", biz, cb);
    },
    fuluMarketQQNicknameGet: function (qq, cb) {
        let biz = {
            qq: qq
        }
        this.doApiWithMethodAndBiz("fulu.market.qqnickname.get", biz, cb);
    },
    fuluMobileInfoGet: function (phone, cb) {
        let biz = {
            phone: phone
        }
        this.doApiWithMethodAndBiz("fulu.mobile.info.get", biz, cb);
    }
}

sdk.init({
    app_key: "i4esv1l+76l/7NQCL3QudG90Fq+YgVfFGJAWgT+7qO1Bm9o/adG/1iwO2qXsAXNB",
    app_secret: "0a091b3aa4324435aab703142518a8f7",
    api_host: "https://pre-openapi.fulu.com/api/getway"
})

module.exports = sdk;