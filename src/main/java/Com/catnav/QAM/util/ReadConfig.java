package Com.catnav.QAM.util;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class ReadConfig {
Properties prop;
//String configpath="./Com.catnav.QAM.config/config.properties";
String configpath="./src/main/java/Com/catnav/QAM/config/config.properties";
File fi = new File (configpath);{
try {
FileInputStream fis = new FileInputStream(fi);
prop = new Properties();
prop.load(fis);
} catch(Exception e){
	System.out.println("Exception is"+e.getMessage());
}
}
public String getApplicationURL()
{
	String url = prop.getProperty("URL");
	return url;
}
public String getBrowserName()
{
	String browsername = prop.getProperty("browser");
	return browsername;
}
public int IMPLICIT_WAIT()
{
	int implicitwait = Integer.parseInt(prop.getProperty("IMPLICIT_WAIT"));
	return implicitwait;
}
public int PAGELOAD_WAIT()
{
	int pageloadwait = Integer.parseInt(prop.getProperty("PAGELOAD_WAIT"));
	return pageloadwait;
}
public String getchromepath()
{
	String chromepath = prop.getProperty("chromepath");
	return chromepath;
}
}
