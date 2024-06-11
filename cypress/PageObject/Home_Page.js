class HomePage{

text_coup="input[name='apply_coupon']";
fie_coup="input[id='coupon_code']";
x_icon="a[title='Remove this item']";
Add_quantity='input[title="Qty"]';
update_basket='input[name="update_cart"]';


link_shop(){
cy.contains('Home').click()

}   

Click_link()
{
cy.contains('Selenium Ruby').click()
    
}   
    
Review_section()
{
cy.contains('Reviews').click()
        
}   
Description_section()
{
cy.contains("Product Description")    
}    

Add_Basket()
{
cy.contains('Add to basket').click()

}

View_basket()
{
cy.contains('View Basket').click()

}

apply_coupon(){
cy.get(this.fie_coup).type("0900-12")
cy.get(this.text_coup).click()    
}

remove_item()
{
cy.get(this.x_icon).click()    

}


add_quantity()
{
cy.get(this.Add_quantity).clear().type('5')    

}


update_basket()
{
cy.get(this.update_basket).click()    

}


}

export default HomePage;