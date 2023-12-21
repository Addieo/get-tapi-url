const getTapiUrl = require("../index");
// typeof window == undefined
console.log(getTapiUrl("stable"));
console.log(getTapiUrl("sit"));
console.log(getTapiUrl("prod"));
console.log(getTapiUrl("dev01"));
console.log(getTapiUrl("dev10"));

window = {};
// location.protocol == 'file:'
location = {
  protocol: "file:",
};
console.log(getTapiUrl("stable"));
window.KAPI_BACKUP_ENABLED = true;
console.log(getTapiUrl("prod"));
