
package Com.catnav.QAM.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "D:/Selenium_Webdriver/CatalogNavigatorBDDFramework/Features/OrderSubmission.feature", //the path of the feature files
		glue={"Com/catnav/QAM/stepDefinition"}, //the path of the step definition files
		plugin = {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
		//, "json:jso 	n_output/cucumber.json", "junit:junit_xml/cucumber.xml"
		monochrome = true, //display the console output in a proper readable format
		strict = true, //it will check if any step is not defined in step definition file
		dryRun = false, //to check the mapping is proper between feature file and step def file
		//tags = {"~@SmokeTest"}	
		tags = {"@SmokeTest"}
		)
public class TestRunner {

}
