package com.basic.sharedataSD;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class ShareData1StepDef {

	
	WebDriver driver;
	
	public ShareData1StepDef(SharedClass share) {
		driver = share.setup();
	}
		
	
	@Then("^User checks user \"([^\"]*)\" first name is present$")
	public void user_checks_user_first_name_is_present(String userName) throws InterruptedException {
		String userNameActual = driver.findElement(By.xpath("//input[@id=\"email\"]")).getAttribute("value");
		Assert.assertEquals(userName, userNameActual);
		Thread.sleep(1000);
		
	}
	
	
	@And("User enters user \"([^\"]*)\" password")
	public void user_enters_user_password(String password) throws InterruptedException {
		driver.findElement(By.xpath("//input[@id=\"pass\"]")).sendKeys(password);
		Thread.sleep(1000);
	}	

	@Then("User Mobile field should not be blank")
	public void user_mobile_field_should_not_be_blank() throws InterruptedException {
		String mobileActual = driver.findElement(By.xpath("//input[@id=\"email\"]")).getAttribute("value");
		Assert.assertEquals("Ryan", mobileActual);
		Thread.sleep(1000);
	}	
	
	
}
