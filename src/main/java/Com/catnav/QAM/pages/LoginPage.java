package Com.catnav.QAM.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Com.catnav.QAM.base.TestBase;

public class LoginPage extends TestBase {
//Page factory
@CacheLookup
@FindBy(id="UserName")
WebElement UserName;
@CacheLookup
@FindBy(id="Password")
WebElement password;
@CacheLookup
@FindBy(id="plpPCATLogin")
WebElement SignInButton;
@FindBy(id="plpPCATLoginCancel")
WebElement CancelButton;
//Initialising the login page object
public LoginPage() {
	PageFactory.initElements(driver, this);
}
//Actions
public String LoginPageTitle()
{
	String title = driver.getTitle();
	return title;
}
public void EnterUsernameAndPassword(String un,String pwd)
{
	UserName.sendKeys(un);
	password.sendKeys(pwd);
}
public HomePage ClickOnSignInButton()
{
	SignInButton.click();
	return new HomePage();
}
public HomePage ClickOnCancel()
{
	CancelButton.click();
	return new HomePage();
}
}
