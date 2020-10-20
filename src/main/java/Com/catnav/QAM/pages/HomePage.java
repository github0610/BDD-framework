package Com.catnav.QAM.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Com.catnav.QAM.base.TestBase;

public class HomePage extends TestBase {
	CategoryResultPage categoryResultPage;
//page factory OR(Object Repository)
	@FindBy(linkText="OrderSubmission")
	WebElement productlink;
	//@FindBy(xpath="//a[contains(text(),'OrderSubmission')]")
	//WebElement KeywordSearchEditBox;
	@FindBy(id="search")
	WebElement KeywordSearchIcon;
	@FindBy(id="plp-rfi")
	WebElement RFI;
	@FindBy(id="plpSignInLink")
	WebElement signinLink;
	//Initialising the Homepage object
	public HomePage()
	{
		PageFactory.initElements(driver, this);
	}
	public boolean SinInLinkPresent()
	{
		return signinLink.isDisplayed();
	}
	/*public String ClickOnSignIn()
	{
		signinLink.click();
		//return new LoginPage();
		return driver.getTitle();
	}*/
	public String validateHomePageTitle()
	{
		return driver.getTitle();
	}
	/*public void DoKeywordSearch()
	{
		KeywordSearchEditBox.sendKeys("item");
		KeywordSearchIcon.click();
	}*/
	public CategoryResultPage clickOnProductCategory()
	{
		productlink.click();
		return categoryResultPage;		
	}
	public String clikconRFI() {
		RFI.click();
		return driver.getTitle();
		
	}
	
	
}
