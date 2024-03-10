import Login from "../PageObject/Login"


describe('Login', () => 
{ 
  
  afterEach(() => {
  cy.reload() })  


  const ln=new Login();

  // Case: #001


it('Correct username & Password ', () => {

cy.fixture("practiceautomationtesting").then((data)=>{
cy.visit(data.Web_URL)
ln.setuserName(data.Email)
ln.setPassword(data.password)
ln.Login_button()
cy.wait(50)
cy.get('.woocommerce-MyAccount-content > :nth-child(1) > a').should('be.visible')
cy.wait(50)
cy.get('.woocommerce-MyAccount-content > :nth-child(1) > a').click();

                
    })
              
    })  

  // Case: #002

it('Incorrect username & Incorrect Password ', () => {
        
cy.fixture("practiceautomationtesting").then((data)=>{
cy.visit(data.Web_URL)
ln.setuserName(data.Incorrect_email)
ln.setPassword(data.Incorrect_passwords)
ln.Login_button()
cy.wait(50)
cy.get('.woocommerce-error > li').
should('have.text','Error: A user could not be found with this email address.');
            
})
          
})
    
    



  })
