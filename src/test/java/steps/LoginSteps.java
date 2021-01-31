package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	WebDriver driver;
	@Given ("^User is on the Techfios Login Page$")
	public void User_is_on_the_Techfios_Login_Page() {
		System.setProperty("webdriver.chrome.driver", "driver\\chromedriver_1.exe");
		driver= new ChromeDriver();
		driver.get("https://www.techfios.com/billing/?ng=admin/");
		
		
		
	}
	@When("^User enters username$")
	public void user_enters_username() throws Throwable {
		driver.findElement(By.xpath("//input[@id='username']")).sendKeys("demo@techfios.com");
	    
	}

	@When("^User enter password$")
	public void user_enter_password() throws Throwable {
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("abc123");
	}

	@When("^User clicks on Signin button$")
	public void user_clicks_on_Signin_button() throws Throwable {
		Thread.sleep(3000);
		driver.findElement(By.xpath("//button[@name ='login']")).click();
	}

	@Then("^User should be landing on Dashboard Page$")
	public void user_should_be_landing_on_Dashboard_Pgae() throws Throwable {
	    
	}


	

}
