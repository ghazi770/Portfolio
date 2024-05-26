import HomePage from "../PageObject/Home_Page"


describe('Home', () => 
{ 
  
  beforeEach(() => {
  cy.visit("https://practice.automationtesting.in/shop/") }) 

  afterEach(() => {
  cy.reload() })  


  const home=new HomePage();

// Case: #003 & #005

it ('Home Page- Images in arrival should be navigate & See Review Section', () => {

home.link_shop()
cy.wait(50)   
home.Click_link()
cy.url().should('eq', 'https://practice.automationtesting.in/product/selenium-ruby/');
home.Review_section()

})  




  })
