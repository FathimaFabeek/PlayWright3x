//objects are used in configuration files
let config={};//empty object
config.browser="chrome";
config.timeout=4000;
console.log(config);
delete config.browser;
console.log(config);

