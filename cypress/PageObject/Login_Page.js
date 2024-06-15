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
    
Login_button()
{

cy.get(this.btnSubmit).click()

}   
   
// Click on SignOut

Sign_out()
{
cy.contains('Sign out').click()

}

}

export default Login;