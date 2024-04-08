import Registration from "../../PageObject/Registration_Page";

describe('Registeration', () => 
{ 
  
beforeEach(() => {
cy.visit("https://practice.automationtesting.in/my-account/") }) 

  const ln=new Registration();

  // Case: #005

it ('Registeration with Empty Email_Id & Password ', () => {

cy.fixture("practiceautomationtesting").then((data)=>{
ln.regis_button()
cy.wait(50)
cy.get('.woocommerce-error > li').
should('have.text','Error: Please provide a valid email address.');                
})
                  
})

// it ('Registeration with Empty Email_id & Password', () => {

// const randomEmail = `test${Math.floor(Math.random() * 100000)}@mailinator.com`;    
// //data.Email=randomEmail
// cy.fixture("practiceautomationtesting").then((data)=>{
// ln.settxtuserEmail(randomEmail)
// ln.set_Password(data.Strong)
// cy.wait(50)
// //cy.get('.woocomerce-FormRow > .woocommerce-Button').click()
// //ln.regis_button()
// //cy.wait(50)
                
//     })
              
//     })  



  })
