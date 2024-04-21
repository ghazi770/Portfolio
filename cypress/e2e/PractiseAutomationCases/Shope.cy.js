import { it } from "mocha";
import Shope_Page from "../../PageObject/Shop";

describe('Shope Page', () => 
{ 
  
before(() => {
cy.visit("https://practice.automationtesting.in/shop/")

}) 

const sp=new Shope_Page();
 
// Case: #002

it('Shop Product Categories only ', () => {

cy.fixture("practiceautomationtesting").then((data)=>{
    
sp.setcategory_link();
cy.wait(50)
sp.setBreadcrum(); 
    
})
                  
})  

// Case: #003

it('Shop-Default-Sorting by popularity Functionlaity ', () => {

sp.setsort_popularity();
cy.wait(50)
                              
})  
    

// Case: #004

it('Shop-Default-Sorting by Average-rating Functionlaity ', () => {

sp.setsort_avgrating();
cy.wait(50)                          
 })  
        

 // Case: #005

it('Shop-Default-Sorting by newness Functionlaity ', () => {

sp.setsort_newness();
cy.wait(50)                          
 })  
    

 // Case: #006
it('Shop-Default-Sorting by Price(Low to High) Functionlaity ', () => {

sp.setsort_low_High();
cy.wait(50)                     
})  
    
 
 // Case: #007
it.only ('Shop-Default-Sorting by Price(High to Low) Functionlaity ', () => {

sp.setsort_High_low();
cy.wait(50)
                          
 })  
    
    

 it ('Correct usern ', () => {

//const filter="//*[@id='woocommerce_price_filter-2']/form/div/div[1]/span[1]";  

//
//cy.get('[style="left: 0%;"]').invoke('val','200').trigger("Change");
  // Set minimum price
  cy.get('[style="left: 0%;"]').trigger('mousedown', { which: 1 }).trigger('mousemove', 100, 0).trigger('mouseup', { force: true });

// Set maximum price
cy.get('.ui-state-hover').trigger('mousedown', { which: 1 }).trigger('mousemove', -100, 0).trigger('mouseup', { force: true });
                  
       
                  
        })
    


})
