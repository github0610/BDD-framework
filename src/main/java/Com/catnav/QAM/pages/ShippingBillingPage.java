package Com.catnav.QAM.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Com.catnav.QAM.base.TestBase;
import Com.catnav.QAM.util.TestUtil;

public class ShippingBillingPage extends TestBase{
	@FindBy(name="FirstName") 
	WebElement FirstName;
	@FindBy(name="LastName") 
	WebElement LastName;
	@FindBy(name="Address1") 
	WebElement Address;
	@FindBy(id="ecomm-ship-city") 
	WebElement City;
	@FindBy(id="ecomm-ship-zip") 
	WebElement zipcode;
	@FindBy(name="Phone") 
	WebElement phoneNo;
	@FindBy(name="Email") 
	WebElement EmailId;
	@FindBy(xpath="//span[contains(text(),'Calculate Shipping')]")
	WebElement calculateshipping;
	@FindBy(xpath="//fieldset[@id='ecomm-standard-options']/ul/li[1]/input[1]")
	WebElement shipperoption;
	@FindBy(xpath="//span[contains(text(),'Step 2: Payment')]")
	WebElement PaymentButton;
	/*@FindBy(id="ecomm-shipping-address")
	WebElement shippingfields;*/
	TestUtil testutil;
	PaymentOptionPage paymentoptionpage;
	public ShippingBillingPage()
	{
		PageFactory.initElements(driver, this);
	}
	public void Entershippingaddress(String FN, String LN, String ADD, String city, String state, String country, String zip, String phone, String email)
	{
		FirstName.sendKeys(FN);
		LastName.sendKeys(LN);
		Address.sendKeys(ADD);
		City.sendKeys(city);
		TestUtil.selectCountry(country);
		TestUtil.selectState(state);	
		zipcode.sendKeys(zip);
		phoneNo.sendKeys(phone);
		EmailId.sendKeys(email);
	}
	public PaymentOptionPage selectshipper() throws InterruptedException
	{
		calculateshipping.click();
		shipperoption.click();
		//WebDriverWait extwait=new WebDriverWait(driver,20);
		//extwait.until(ExpectedConditions.elementToBeClickable(PaymentButton));
		Thread.sleep(20);
		PaymentButton.click();
		return paymentoptionpage;
	}
	public String Titleofshippingbillingpage()
	{
		return driver.getTitle();
	}
	/*public String Titleofpaymentoptionpage()
	{
		return driver.getTitle();
	}*/
	
}
