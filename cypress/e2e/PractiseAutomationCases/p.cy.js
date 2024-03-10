describe('Login', () => 
{
    
it('Successfully Login ', () => 
{
    
    cy.fixture("actualData").then((data)=>{
    cy.visit("https://www.automationexercise.com/login")    
    cy.get("[data-qa='login-email']").type("khan001@gmail.com");
    cy.get("[data-qa='login-password']").type("bravoecho!211");
    cy.get("[data-qa='login-button']").click();
    cy.get("p[style='color: red;']").
        should('have.text','Your email or password is incorrect!');
       
    })
      
      

      
    }
    
    )



  }
  
  )
