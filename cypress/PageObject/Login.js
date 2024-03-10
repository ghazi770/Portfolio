class Login{
    txtuserName="[name='username']";
    txtPassword="[id='password']";
    btnSubmit="[name='login']";
    //messInUserPass="//*[@id='page-36']/div/div[1]/ul/li";
    //"cy.get('.woocommerce-error > li')";
    //assDashboard='//*[@id="page-36"]/div/div[1]/nav/ul/li[1]/a';
   
   setuserName(userName){
   cy.get(this.txtuserName).type(userName)   
   }
       
   setPassword(password){
   cy.get(this.txtPassword).type(password)   
   }
    
   Login_button(){
   cy.get(this.btnSubmit).click()
   }   
   
   }
   export default Login;