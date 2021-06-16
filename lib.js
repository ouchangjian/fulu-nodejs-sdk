const moment = require("moment");
const crypto = require("crypto");
const axios = require("axios");

let APP_KEY = "";
let APP_SECRET = "";
let API_HOST = "";
module.exports = {
    updateConfig: function (config) {
        APP_KEY = config.app_key;
        APP_SECRET = config.app_secret;
        API_HOST = config.api_host;
    },
    doApi: function (req, cb) {
        let _that = this;
        req = this.buildReq(req);
        console.log(req);
        axios.post(API_HOST, req).then(function (res) {
            // console.log(res.data)
            if (res.data.result) {
                let check_sign = _that.buildSignWithString(res.data.result);
                res.data.result = JSON.parse(res.data.result);
                res.data.check_sign = check_sign;
            }
            cb(null, res.data);
        }).catch(function (err) {
            console.log(err)
            cb(err, null);
        })
    },
    buildReq: function (req) {
        req.app_key = APP_KEY;
        req.timestamp = this.getTimestamp();
        req.version = "2.0";
        req.format = "json";
        req.charset = "utf-8";
        req.sign_type = "md5";
        req.app_auth_token = "";
        req.sign = this.buildSign(req);
        return req;
    },
    buildSign: function (req) {
        // 防止把sign误加入
        delete req.sign;
        let reqString = JSON.stringify(req);
        return this.buildSignWithString(reqString);
    },
    buildSignWithString: function (reqString) {
        let reqCharArray = reqString.split("");
        reqCharArray.sort();
        reqString = reqCharArray.join("");
        let signString = reqString + APP_SECRET;
        // console.log(signString);
        let sign = crypto.createHash('md5').update(signString).digest("hex");
        return sign;
    },
    getTimestamp: function () {
        return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    }
}