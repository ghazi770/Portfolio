class Registration{
    
txtuserEmail="input[id='reg_email']";
txtPassword="input[id='reg_password']";
btnRegister="input[name='register']";
email_error="label[for='reg_password']";    
     
settxtuserEmail(txtuserEmail){
cy.get(this.txtuserEmail).type(txtuserEmail)   
}
       
Invalid_email(){
cy.get(this.txtuserEmail).type('Abc12example.com')   
}

    
set_Password(){
cy.get(this.txtPassword).type('shaheen@21')  
}
    
set_Password2(){
cy.get(this.txtPassword).type('47')  
}
   

regis_button_click(){
cy.get(this.btnRegister).click()
}   

// Verify Email Error

Email_error()
{
cy.get(this.email_error).should('be.visible')

}
   }
   export default Registration;