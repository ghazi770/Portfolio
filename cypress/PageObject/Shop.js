class Shope_Page
{
    
txtfilter="div[class='price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content']";
txtDashboard= "//*[@id='page-36']/div/div[1]/nav/ul/li[1]/a";
leftfilter="//*[@id='woocommerce_price_filter-2']/form/div/div[1]/span[1]";    
sort_dropdown="//*[@id='content']/form";



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


}


export default Shope_Page;