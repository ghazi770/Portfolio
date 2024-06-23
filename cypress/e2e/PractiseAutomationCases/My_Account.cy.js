import { before } from "mocha";
import Account from "../../PageObject/Account_Page";
import Base from "../../e2e/Base/Base_class"

describe('Account Page', () => 
{ 
const base= new Base();     
const acc=new Account();

base.log_in()

it('My Account- Test cases', () => {

// Case: #001 ['My Account- Dashboard ']


base.URL_assertion('https://practice.automationtesting.in/my-account/')

// Case: #002 ['My Account- Orders ']
cy.wait(50)
acc.Click_order()
base.URL_assertion('https://practice.automationtesting.in/my-account/orders/')
// Case: #003 ['My Account- Verify Orders '] 

cy.get(':nth-child(1) > .order-number > a').click()
base.URL_assertion('https://practice.automationtesting.in/my-account/view-order/22967/')

// Case: #004 ['My Account- Downloads ']
cy.wait(50)
acc.setlink_download()
base.URL_assertion('https://practice.automationtesting.in/my-account/downloads/')

// Case: #005 ['My Account- Address Detail ']  

cy.wait(100)
acc.setlink_Address()
base.URL_assertion('https://practice.automationtesting.in/my-account/edit-address/')

// Case: #006 ['My Account- Account Detail ']  
cy.wait(100)
acc.setlink_AccDeatail()
base.URL_assertion('https://practice.automationtesting.in/my-account/edit-account/')

// Case: #007 ['My Account- LogOut ']

cy.wait(100)
acc.set_logOut()

}) 
     


  })
