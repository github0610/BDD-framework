package Com.catnav.QAM.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Com.catnav.QAM.base.TestBase;

public class AdditionalOptionPage extends TestBase {
ViewCartPage viewcartpage;
AdditionalOptionPage additionaloptionpage;
@FindBy(id="edit-attr-view-cart")
WebElement viewcart;
@FindBy(id="ui-id-3")
WebElement AOTitle;
public AdditionalOptionPage()
{
	PageFactory.initElements(driver, this);
}
public ViewCartPage clickonviewcart()
{
	//driver.switchTo().frame("additional-popup-iframe");
	viewcart.click();
	return viewcartpage;
}
public String TitleofAOPage()
{
	return additionaloptionpage.AOTitle.getText();
}
}
