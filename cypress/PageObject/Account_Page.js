class Account{
    
linkorder="li[class='woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders']";
linkdownload="li[class='woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--downloads']";
link_address="li[class='woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-address']";
link_AccDeatail="li[class='woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account']";
link_logOut="li[class='woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout']";

setlinkorder(){
cy.get(this.linkorder).click()
  
}

setlink_download(){
    cy.get('.woocommerce-MyAccount-navigation-link--downloads > a').click()
//cy.get(this.linkdownload).click()
   
}

setlink_Address(){
cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
//cy.get(this.link_address).click()  
}

setlink_AccDeatail(){
cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
//cy.get(this.link_AccDeatail).click()   
}

set_logOut(){
cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
//cy.get(this.link_logOut).click()   

}

// Click on Order option

Click_order()
{

cy.contains('Orders').click()

}
                

}
export default Account;