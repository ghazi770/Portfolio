class Shope_Page
{
    
txtfilter="div[class='price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content']";
txtDashboard= "//*[@id='page-36']/div/div[1]/nav/ul/li[1]/a";
leftfilter="//*[@id='woocommerce_price_filter-2']/form/div/div[1]/span[1]";    
//category_link="//*[@id='woocommerce_product_categories-2']/ul/li[2]/a";
//Breadcrum="//*[@id='content']/nav/a";

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
}
export default Shope_Page;