class Shope_Page
{
    
txtfilter="div[class='price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content']";
txtDashboard= "//*[@id='page-36']/div/div[1]/nav/ul/li[1]/a";
leftfilter="//*[@id='woocommerce_price_filter-2']/form/div/div[1]/span[1]";    
sort_dropdown="//*[@id='content']/form";
add_basket="a[data-product_id='160']";
view_basket="//*[@id='content']/ul/li[1]/a[3]";

// Billing Details

First_name="input[id='billing_first_name']";
last_name="input[id='billing_last_name']";
Company="input[id='billing_company']";
billing_email="input[id='billing_email']";
billing_phone="input[id='billing_phone']";
Address="input[id='billing_address_1']";
city="input[id='billing_city']";
Postal_code="input[id='billing_postcode']";
Place_Order="input[id='place_order']";

// ........................................................



settxtfilter()
{
cy.get(this.txtfilter)  
}

setcategory_link()
{
    cy.get('.cat-item-24 > a').click()  
}

setBreadcrum()
{
    cy.get('.woocommerce-breadcrumb > a').should('have.text','Home')    

}


setleftfilter()
{
cy.get(this.leftfilter)  
}

setDashboard(){
cy.get(this.txtDashboard)   
}

//Sorting Portion

setsort_popularity()
{

cy.get('.orderby').select('Sort by popularity'); 

    
}


setsort_avgrating()
{

cy.get('.orderby').select('Sort by average rating'); 

    
}


setsort_newness()
{

cy.get('.orderby').select('Sort by newness'); 
}


setsort_low_High()
{

cy.get('.orderby').select('Sort by price: low to high'); 
}


setsort_High_low()
{

cy.get('.orderby').select('Sort by price: high to low'); 
}


// Add to Basket 

set_add_basket()
{
    cy.get('.post-169 > .button')  
}


set_view_basket()
{
cy.get(this.view_basket)  
}

// Billing Details 

set_firstName(fname)
{
cy.get(this.First_name).type(fname)   
}

set_lastName(lname)
{
cy.get(this.last_name).type(lname)   
}


set_companyName(com)
{
cy.get(this.Company).type(com)   
}


set_billingEmail(bille)
{
cy.get(this.billing_email).type(bille)   
}


set_billingPhone(bill_phone)
{
cy.get(this.billing_phone).type(bill_phone)   
}


set_Billingaddress(bill_addr)
{
cy.get(this.Address).type(bill_addr)   
}


set_BillingCity(bill_city)
{
cy.get(this.city).type(bill_city)   
}


set_PostalCode(postal)
{
cy.get(this.Postal_code).type(postal)   
}


PlaceOrder_button(){
cy.get(this.Place_Order).click()

} 

}


export default Shope_Page;