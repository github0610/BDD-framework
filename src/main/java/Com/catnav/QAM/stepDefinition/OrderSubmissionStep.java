package Com.catnav.QAM.stepDefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import Com.catnav.QAM.base.TestBase;
import Com.catnav.QAM.pages.AdditionalOptionPage;
import Com.catnav.QAM.pages.CategoryResultPage;
import Com.catnav.QAM.pages.HomePage;
import Com.catnav.QAM.pages.ItemDetailsPage;
import Com.catnav.QAM.pages.LoginPage;
import Com.catnav.QAM.pages.PaymentOptionPage;
import Com.catnav.QAM.pages.ReviewOrderPage;
import Com.catnav.QAM.pages.ShippingBillingPage;
import Com.catnav.QAM.pages.ThankYouPage;
import Com.catnav.QAM.pages.ViewCartPage;
import Com.catnav.QAM.util.TestUtil;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrderSubmissionStep extends TestBase{
	LoginPage loginpage;
	HomePage homepage;
	CategoryResultPage categoryresultpage;
	ItemDetailsPage itemdetailspage;
	AdditionalOptionPage additionaloptionpage;
	ViewCartPage viewcartpage;
	ShippingBillingPage shippingbillingpage;
	PaymentOptionPage paymentoptionpage;
	ReviewOrderPage revieworderpage;
	ThankYouPage thankyoupage;
	
	@Before
	public void setup()
	{
		initialization();
		homepage = new HomePage();
		loginpage = new LoginPage();
		categoryresultpage = new CategoryResultPage();
		itemdetailspage = new ItemDetailsPage();
		additionaloptionpage = new AdditionalOptionPage();
		viewcartpage = new ViewCartPage();
		shippingbillingpage = new ShippingBillingPage();
		paymentoptionpage = new PaymentOptionPage();
		revieworderpage = new ReviewOrderPage();
		thankyoupage = new ThankYouPage();
	}
	@After
	public void teardown()
	{
		driver.quit();
	}
	@When("^User is on Item details page$")
	public void user_is_on_Item_details_page(){
		homepage.clickOnProductCategory();
		categoryresultpage.ClickOnItem();
	}

	@Then("^Click on Add to cart button$")
	public void click_on_Add_to_cart_button() throws InterruptedException {
		itemdetailspage.clickonaddtocart();
	}

	/*@Then("^User should be on Additional option page$")
	public void user_should_be_on_Additional_option_page(){
		String TitleOfAO = additionaloptionpage.TitleofAOPage();
		Assert.assertEquals(TitleOfAO, "You have added this item to your cart (1)");
	}*/

	@When("^user click on View cart button$")
	public void user_click_on_View_cart_button() {
		additionaloptionpage.clickonviewcart();
		
	}

	@Then("^user should be on View cart page$")
	public void user_should_be_on_View_cart_page(){
		String viewcartpagetitle = viewcartpage.TitleOfViewCartPage();
		Assert.assertEquals(viewcartpagetitle, "View Cart");
		
	}

	@When("^Click on Proceed to checkout button$")
	public void click_on_Proceed_to_checkout_button() throws InterruptedException{
		viewcartpage.clickonproceedtocheckout();
		//Thread.sleep(5000);
		String path="//article[@id='ecomm-shipping-address']";
		TestUtil.explicitwait(path, 10);
	}

	@Then("^User should be on shipping Billing page$")
	public void user_should_be_on_shipping_Billing_page(){
		Assert.assertEquals(shippingbillingpage.Titleofshippingbillingpage(), "Step 1 - Shipping");
	}

	@Then("^Enter shipping address is as follows$")
	public void enter_shipping_address_is_as_follows(DataTable userinformation)  {
		List<List<String>> userinfo =  userinformation.raw();
		userinfo.get(0).get(0);
		userinfo.get(0).get(1);
		userinfo.get(0).get(2);
		userinfo.get(0).get(3);
		userinfo.get(0).get(4);
		userinfo.get(0).get(5);
		userinfo.get(0).get(6);
		userinfo.get(0).get(7);
		userinfo.get(0).get(8);
		shippingbillingpage.Entershippingaddress(userinfo.get(0).get(0), userinfo.get(0).get(1), userinfo.get(0).get(2), userinfo.get(0).get(3), userinfo.get(0).get(4), userinfo.get(0).get(5), userinfo.get(0).get(6), userinfo.get(0).get(7), userinfo.get(0).get(8));
		
	}

	@When("^Click on Calculate shipping button and select shipper then Click on Payment button$")
	public void Click_on_Calculate_shipping_button_and_select_shipper_then_Click_on_Payment_button() throws InterruptedException {
		shippingbillingpage.selectshipper(); 
	}

	/*@Then("^user should be on payment option page$")
	public void user_should_be_on_payment_option_page() {
		String title = (shippingbillingpage).Titleofpaymentoptionpage();
		Assert.assertEquals(title, "Step 2: Payment");
	}*/

	@Then("^select My Shipping Address is also my Billing Address radio buton$")
	public void select_My_Shipping_Address_is_also_my_Billing_Address_radio_buton() {
		paymentoptionpage.SelectBillingAddress();
	}

	@Then("^select payment provider and click on Review and Submit order button$")
	public void select_payment_provider_and_click_on_Review_and_Submit_order_button(DataTable dt) {
		for(Map<String, String> data : dt.asMaps(String.class,String.class))
		{	
			//paymentoption.click();
			//Net terms = 64
			//COD = 16
			//invoice 32
		
			paymentoptionpage.paymentmethod(data.get("COD"));
			//paymentoptionpage.paymentmethod(data.get("NetTerms"));
			//paymentoptionpage.paymentmethod(data.get("Invoice"));
	
	
		//paymentoptionpage.paymentmethod();
		}
	}
		
		
	

	
	/*@When("^click on Review and Submit order button$")
	public void click_on_Review_and_Submit_order_button() {
	    
	}

	@Then("^Review order page should be dislayed$")
	public void review_order_page_should_be_dislayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}*/

	@When("^click on Submit order button$")
	public void click_on_Submit_order_button() throws InterruptedException {
		revieworderpage.submitorder();
		String str = "//div[@id='ecomm-confirmation-message']";
		TestUtil.explicitwait(str, 10);
	}
	@Then("^User should be navigate to order submission page$")
	public void user_should_be_navigate_to_order_submission_page() {
		System.out.println(ThankYouPage.verifyordersubmissiontest());
		Assert.assertEquals(ThankYouPage.verifyordersubmissiontest(), "Order Confirmation");
	}
	
	@Then("^login with Username as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void login_with_Username_as_and_Password_as(String UN, String PWD) {
		loginpage.ClickOnSignInButton();
		loginpage.EnterUsernameAndPassword(UN, PWD);
		loginpage.ClickOnSignInButton();
	}
}
