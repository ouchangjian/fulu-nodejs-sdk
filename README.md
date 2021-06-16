# 福禄开放平台nodejs版本SDK

## 使用方法

### 导入SDK
```
npm install fulu-nodejs-sdk --save
const fuluSDK = require("fulu-nodejs-sdk");
```

### 初始化
```
fuluSDK.init({
    app_key: "i4esv1l+76l/7NQCL3QudG90Fq+YgVfFGJAWgT+7qO1Bm9o/adG/1iwO2qXsAXNB",
    app_secret: "0a091b3aa4324435aab703142518a8f7",
    api_host: "https://pre-openapi.fulu.com/api/getway"
})
```

### 调用SDK方法
```
fuluSDK.fuluUserInfoGet(function (err, data) {
    console.log(data);
})
```
将会看到：
```
{
  code: 0,
  message: '接口调用成功',
  result: { name: 'OpenApi2.0对接专用商户', balance: 344283.1608, is_open: 1 },
  sign: 'af223d55aaab949a4061d651cc4b2765',
  check_sign: 'af223d55aaab949a4061d651cc4b2765'
}
```
注：接口响应体中的result会被JSON.parse()，如要校验响应体sign可以check_sign字段比较;


## 方法列表

### init(config)
初始化SDK

### getSignWithObj(obj)
计算sign

### doApiWithMethodAndBiz(method, biz, cb)
独立的请求方法，补充本SDK不足，可以指定method,biz_content

### fuluUserInfoGet(cb)
获取用户信息接口

### fuluOrderDirectAdd(product_id, customer_order_no, charge_account, buy_num, cb)
直充下单接口

### fuluOrderCardAdd(product_id, customer_order_no, buy_num, cb)
卡密下单接口

### fuluOrderInfoGet(customer_order_no, cb)
订单查询接口

### fuluGoodsListGet(cb)
获取商品列表接口

### fuluGoodsInfoGet(product_id, cb)
获取商品信息接口
