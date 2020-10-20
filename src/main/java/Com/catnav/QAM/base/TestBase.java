package Com.catnav.QAM.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import Com.catnav.QAM.pages.LoginPage;
import Com.catnav.QAM.util.ReadConfig;

public class TestBase {
	public static WebDriver driver;
	public static EventFiringWebDriver e_driver;
	public static Properties prop;
	public static ReadConfig readconfig;
	@FindBy(id="plpSignInLink")
	WebElement signinLink;
	public TestBase()
	{
	prop=new Properties();
	try {
		FileInputStream fis = new FileInputStream(System.getProperty("user.dir")+"/src/main/java/Com/catnav/QAM/config/config.properties");
		prop.load(fis);
	} catch (FileNotFoundException e) {
		e.printStackTrace();
	} catch (IOException e) {
		e.printStackTrace();
	}	
	}
	
	public void initialization()
	{
		
		readconfig=new ReadConfig();
		//String browserName = prop.getProperty("browser");
		//this is nesw
		String browserName=readconfig.getBrowserName();
		if(browserName.equalsIgnoreCase("chrome"))
		{
			//System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\Drivers\\chromedriver.exe");
			//System.setProperty("webdriver.chrome.driver", "C:\\Users\\Ratnesh\\Desktop\\Selenium\\chromedriver.exe");
			System.setProperty("webdriver.chrome.driver", readconfig.getchromepath());
			driver=new ChromeDriver();
		}
		else if(browserName.equalsIgnoreCase("firefox"))
		{
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir")+"\\Drivers\\geckodriver.exe");
			driver=new FirefoxDriver();
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(readconfig.PAGELOAD_WAIT(), TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(readconfig.IMPLICIT_WAIT(), TimeUnit.SECONDS);
		//driver.get(prop.getProperty("URL"));
		driver.get(readconfig.getApplicationURL());
		
		}
	public LoginPage ClickOnSignInLink()
	{
		signinLink.click();
		return new LoginPage();
		
	}
}
