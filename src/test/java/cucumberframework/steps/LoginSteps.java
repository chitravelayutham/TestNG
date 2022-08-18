package cucumberframework.steps;

import static org.testng.Assert.assertEquals;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	WebDriver driver;
	
	@Before
	public void setup() throws IOException {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/chromedriver104.exe");
		this.driver = new ChromeDriver();
	//	this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
	}
	
	@Given("^User navigates to the \"([^\"]*)\" website$")
	public void user_navigates_to_the_website(String url) {
		driver.get(url);
	}

	@Given("^User clicks on Login portal$")
	public void user_clicks_on_Login_portal()  {
	//	driver.findElement(By.xpath("//*[@id="login-portal"]")).click(); 
		driver.findElement(By.id("login-portal")).click();
	}

	@Given("^User enters valid username \"([^\"]*)\"$")
	public void user_enters_valid_username(String username)  {
		//String winHandlerBefore = driver.getWindowHandle();
		
		for(String winHandler : driver.getWindowHandles()) {
			driver.switchTo().window(winHandler);
		}
		
		driver.findElement(By.id("text")).sendKeys(username);   //   //*[@id="text"]   id=text
	}
	
	@Given("^User enters valid password \"([^\"]*)\"$")
	public void user_enters_valid_password(String password)  { //    //*[@id="password"]  id=password
		driver.findElement(By.id("password")).sendKeys(password);
	}

	@When("^User clicks on the Login button$")
	public void user_clicks_on_the_Login_button() {  //   //*[@id="login-button"]  id=login-button
		driver.findElement(By.id("login-button")).click();
	}

	@Then("^An alert is displayed to the user with \"([^\"]*)\"$")
	public void an_alert_is_displayed_to_the_user_with(String message) throws Throwable {
		try {			
		}catch(Exception e) {
			if(e.toString().contains("org.openqa.selenium.UnhandledAlertException")) {
				Alert a = driver.switchTo().alert();
				a.accept();  // clicks on OK				
				System.out.println("************************ "+ a.getText());
				assertEquals(a.getText(), message);	
				driver.close();
			}			
		}
	
	}

	
}
