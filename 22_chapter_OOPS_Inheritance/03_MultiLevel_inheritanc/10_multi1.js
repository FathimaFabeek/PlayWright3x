// grandfather>father>son
//basepage>authpage>adminpage
class basePage {
    constructor(name){
        this.name= name;
    }
    open()
    {
        console.log("[OPEN] "+this.name);
    }
}
class AuthPage extends basePage{
    login(user){
        console.log("[LOGIN] "+user);
    }
}
class AdminPage extends AuthPage{
    constructor(){
        super("admin panel");
    }
    ManageUsers(){
        console.log("[ADMIN] managing users");
    }
}
let admin=new AdminPage();
admin.open();
admin.login("superadmin");
admin.ManageUsers();// admin can use every classes