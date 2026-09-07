class browser{
    constructor(name){
        this.name=name;
        this.isOpen=true;
        console.log(name+" is launched");
    }
    startsBrowser(){    
        console.log("Strating the browser");
    }
    closingBrowser(){

        console.log("closing the browser");
    }
}
let chrome=new browser("chrome");   
let firefox=new browser("firefox");
console.log(chrome.isOpen);
chrome.startsBrowser(); 
chrome.closingBrowser();