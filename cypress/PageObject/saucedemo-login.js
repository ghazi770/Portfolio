class Login{
    txtuserName="input[data-test='password']";
    txtPassword="[id='password']";
    btnSubmit="input[data-test='login-button']";
    err01="h3[data-test='error']";
    
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