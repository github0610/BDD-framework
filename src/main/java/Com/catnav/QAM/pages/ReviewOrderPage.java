package Com.catnav.QAM.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Com.catnav.QAM.base.TestBase;
import Com.catnav.QAM.util.TestUtil;

public class ReviewOrderPage extends TestBase {
	//int index=1;
	@FindBy(xpath="//section[2]//a[2]")
	WebElement submitorder;
	ThankYouPage thankyoupage;
	public ReviewOrderPage()
	{
		PageFactory.initElements(driver, this);
	}
	public ThankYouPage submitorder()
	{
		//TestUtil.ReturnWeEelement().click();
		submitorder.click();
		return thankyoupage;
	}
}
