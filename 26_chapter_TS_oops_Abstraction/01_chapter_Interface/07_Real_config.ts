interface testConfig{
    browser:string;
    headless:boolean;
    baseURL:string;
    timeout?:number;
    retries?: number;
}
let localConfig:testConfig={
    browser:"Chrome",
    headless: true,
    baseURL:"https//staging.app.com"
};
let CIconfig:testConfig={
    browser:"firefox",
    headless: false,
    baseURL:"https//localhost:3000",
    timeout:10000,
    retries:3
}
console.log("CI:",CIconfig.browser, "timeout: ",CIconfig.timeout);
console.log("Local: ",localConfig.browser, "|timeout: ",localConfig.timeout);