import { HotoffdeGrill } from "./joshPage";
const restaurant = new HotoffdeGrill();

test('Instagram Button', async () => {
    await restaurant.navigate();
    await restaurant.driver.sleep(2000);
    await restaurant.click (restaurant.popUp);
    await restaurant.scrollToElement(restaurant.about);
    await restaurant.click(restaurant.about);
    await restaurant.scrollToElement(restaurant.insta);
    await restaurant.click(restaurant.insta);
    await restaurant.instaTabs();
});

test('Email', async () => {
    await restaurant.navigate();
    await restaurant.driver.sleep(2000);
    await restaurant.scrollToElement(restaurant.email);
    await restaurant.click(restaurant.email);
    await restaurant.emailTabs();
});

test('Send Message', async () => {
    await restaurant.navigate();
    await restaurant.driver.sleep(2000);
    await restaurant.scrollToElement(restaurant.firstName);
    await restaurant.setInput(restaurant.firstName, "Josh");
    await restaurant.setInput(restaurant.lastName, "Powell");
    await restaurant.setInput(restaurant.emailAdd, "testemail@gmail.com");
    await restaurant.setInput(restaurant.phoneNum, 1234567890);
    await restaurant.setInput(restaurant.comment, "great food!");
    await restaurant.restaurantScreenshot(restaurant.sendMessage);
    await restaurant.driver.quit();
});