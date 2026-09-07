class BasePage{
    verify(){   
        console.log("BasePage verify method");
    }
}
class LoginPage extends BasePage{
    verify(){
        console.log("verify: UserName field exists ");
        console.log("verify: Password field exists ");
        console.log("verify: Login button visible ");
    }   }
    class DashboardPage extends BasePage{
        verify(){
            console.log("verify: welcome message is displayed ");
            console.log("verify: side bar menu loaded  ");
        }}
        class cartPage extends BasePage{
            verify(){
                console.log("verify: cart items are displayed ");
                console.log("verify: total price is correct ");
            }}
            let pages=[new LoginPage(), new DashboardPage(), new cartPage()];
            pages.forEach(function(page){
                page.verify();
                console.log("---------------------------------------------------");
            });