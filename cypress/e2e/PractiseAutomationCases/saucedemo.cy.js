
import saucedemo from "../PageObject/saucedemo-login"


describe('Login', () => 
{
  const ln=new Login();
    
it('Successfully Login ', () => 
{
    
        cy.fixture("saucedemo").then((data)=>{
        cy.visit(data.Web_URL)
        ln.setuserName(data.Email)
        ln.setPassword(data.Incorrect_password)
        ln.Login_button()
        cy.get(data.err01).
        should('have.text','Epic sadface: Username and password do not match any user in this service');
    

    })
      
      

      
    }
    
    )


          
    
          
    
    



  }
  
  )
