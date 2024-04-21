class Login{
    
    txtuserName="[name='username']";
    txtPassword="[id='password']";
    btnSubmit="[name='login']";
    
     
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