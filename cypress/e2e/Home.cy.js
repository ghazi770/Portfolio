import HomePage from "../PageObject/Home_Page"


describe('Home', () => 
{ 
  
  beforeEach(() => {
  cy.visit("https://practice.automationtesting.in/shop/") }) 

  afterEach(() => {
  cy.reload() })  


  const home=new HomePage();

// Case: #003 & #005

it ('Home Page', () => {

home.link_shop()
cy.wait(50)   
home.Click_link()
cy.url().should('eq', 'https://practice.automationtesting.in/product/selenium-ruby/');

// Case: #004 ['Home Page - Arrival Image-Description '] 
home.Description_section()

// Case: #005 ['Home Page - Arrival Image-Review section '] 
home.Review_section()

// Case: #006 ['Home Page - Arrival Image-Add to Basket ']

home.Add_Basket()
cy.get('span[class="cartcontents"]').should('have.text','1 item')

// Case: #007 Currently not possible

// Case: #008 ['Home Page - Arrival Image-Add to Basket items']

home.View_basket()
cy.url().should('eq', 'https://practice.automationtesting.in/basket/');

// Increase quantiy

//const newQuantity = parsedQuantity + 1;

// Set the new quantity
//cy.get('@quantityInput').clear().type(newQuantity);


// Case: #009 ['Home Page - Arrival Image-Add to Basket items-coupon']

home.apply_coupon()

//cy.get('//*[@id="page-34"]/div/div[1]/ul/li').should('have.text','Coupon "0900-12" does not exist!')

// Case: #010- Currently no way to create coupan

// Case: #011 ['Home Page - Arrival Image-Add to Bask-Remove item']

home.remove_item()
cy.get('.cart-empty').should('have.text', '\n\tYour basket is currently empty.')

})  




  })
