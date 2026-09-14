interface BasePage{
    url:string;
    title:string;
}
interface LoginPage extends BasePage{
    userNameSelector: string;
    passwordSelector: string;
    LoginButtonSelector:string;
}
interface freeTrialPage extends BasePage{
    usernameSelector:string;
    submitButtonSelector:string;
}
let loginPage:LoginPage={
    url:"/login",
    title:"loginPage",
    userNameSelector:"#username",
    passwordSelector:"#password",
    LoginButtonSelector:"#Login-btn"
}
let freetrial:freeTrialPage={
     url:"/free-trial",
    title:"Free Page",
    usernameSelector:"#username",
    submitButtonSelector:"#sbmt"
}
console.log("URL: ",loginPage.url);// when looking into this, basepage is hidden, that is abstraction
console.log("TITLE: ",loginPage.title);
console.log("UserName field: ",loginPage.userNameSelector);
