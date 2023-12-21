module.exports = function (env) {
  var devMatch = env.match(/dev(\d{2})/);
  var defaultProtocol = "";
  if (typeof window === "undefined" || location.protocol === "file:") {
    defaultProtocol = "https:";
  }
  if (devMatch) {
    return "http://tapi" + devMatch[1] + ".dev.tianyin.cn/api.do";
  } else if (env === "stable") {
    return defaultProtocol + "//tapi.stable.tianyin.cn/api.do";
  } else if (env === "sit") {
    return defaultProtocol + "//tapi.ksit.tianyin.cn/api.do";
  } else {
    if (typeof window !== "undefined" && window.tapi_BACKUP_ENABLED) {
      return "https://tapi2.sst.cn/api.do";
    }
    return "https://tapi.sst.cn/api.do";
  }
};
