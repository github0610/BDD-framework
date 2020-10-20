package Com.catnav.QAM.util;


import java.io.File;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import Com.catnav.QAM.base.TestBase;

public class TestUtil extends TestBase {
//public static int IMPLICIT_WAIT=20;
//public static int PAGELOAD_WAIT=20;
static String testdatapath=System.getProperty("user.dir")+"\\src\\main\\java\\Com\\catnav\\QAM\\testdata\\TestData.xlsx";
//static XSSFWorkbook workbook;
//static XSSFSheet sheet;
public static void selectCountry(String countryName)
{
Select sel = new Select(driver.findElement(By.id("ecomm-ship-country")));
	sel.selectByVisibleText(countryName);
}
public static void selectState(String stateName)
{
Select sel = new Select(driver.findElement(By.id("ecomm-ship-state")));
	sel.selectByVisibleText(stateName);
}
public static WebElement ReturnWeEelement()
{
	//System.out.println(locator);
	List<WebElement> list = driver.findElements(By.xpath("//section/a[2]/span[@class='ui-button-text']"));
	return list.get(0);
}
public static void takeScreenshot() throws Exception {
	
	TakesScreenshot ts = (TakesScreenshot)driver;
	File scrFile = ts.getScreenshotAs(OutputType.FILE);
	String currentDir = System.getProperty("user.dir");
	File targetFile = new File(currentDir + "/Screenshots/" + System.currentTimeMillis() + ".png");
	//File targetFile = new File("./Screenshots/name.png");
	FileUtils.copyFile(scrFile, targetFile);
}
/*public static Object[][] getTestData(String sheetName)
{
	FileInputStream file=null;
	try {
		file=new FileInputStream(testdatapath);
	} catch (FileNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	workbook = new XSSFWorkbook()
}*/

//Method is for select paymetn provider as per value passed
public static void selectpaymentmethod(String attvalue)
{
	driver.findElement(By.xpath("//input[@name='payment-method'][@value="+attvalue+"]")).click();
}
	

// Explicit wait function
public static void explicitwait(String wb,int t)
{
	WebDriverWait wait = new WebDriverWait(driver,t);
	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(wb)));
}

//Actions class
public static void MouseAction(WebElement locator)
{
	Actions act = new Actions(driver);
	act.moveToElement(locator).build().perform();
}


}
