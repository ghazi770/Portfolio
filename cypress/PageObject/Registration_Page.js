class Registration{
    
    txtuserEmail="input[id='reg_email']";
    txtPassword="input[id='reg_password']";
    btnRegister="input[name='register']";
    
     
    settxtuserEmail(txtuserEmail){
    cy.get(this.txtuserEmail).type(txtuserEmail)   
   }
       
   set_Password(password){
   cy.get(this.txtPassword).type(password)   
   }
    
   regis_button(){
   cy.get(this.btnRegister).click()
   }   
   
   }
   export default Registration;