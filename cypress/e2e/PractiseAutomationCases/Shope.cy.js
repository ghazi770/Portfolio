import Shope_Page from "../../PageObject/Shop";

describe('Shope Page', () => 
{ 
  
   
before(() => {
cy.visit("https://practice.automationtesting.in/shop/")

}) 



const sp=new Shope_Page();
 
// Case: #002


it.only ('Shop Product Categories only ', () => {

cy.fixture("practiceautomationtesting").then((data)=>{
    
sp.setcategory_link();
cy.wait(50)
sp.setBreadcrum(); 
    
})
                  
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
