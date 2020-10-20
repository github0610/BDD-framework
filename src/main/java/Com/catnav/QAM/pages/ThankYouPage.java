package Com.catnav.QAM.pages;

import org.openqa.selenium.support.PageFactory;

import Com.catnav.QAM.base.TestBase;

public class ThankYouPage extends TestBase{
	//@FindBy(xpath="//a[@class='ecomm-cart-submit ecomm-checkout-button ecomm-button ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-state-hover']//span[@class='ui-button-text'][contains(text(),'Submit Order')]")
	//WebElement submitorder;
	public ThankYouPage()
	{
		PageFactory.initElements(driver, this);
	}
	public static String verifyordersubmissiontest()
	{
		String title = driver.getTitle();
		return title;
	}

}
