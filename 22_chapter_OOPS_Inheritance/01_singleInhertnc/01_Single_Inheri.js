class BasePage{
    open(){ 
        console.log("BasePage open method");    
    }
    close(){
        console.log("BasePage close method");
    }
}
class loginpage extends BasePage{
  
    }
    let page=new loginpage();
    page.open();//single inheritance.child can access the parent method
    page.close();