import { HotoffdeGrill } from "./joshPage";
const restaurant = new HotoffdeGrill();

test('Instagram Button', async () => {
    await restaurant.navigate();
    await restaurant.click(restaurant.about);
    await restaurant.click(restaurant.insta);
});

test('Email', async () => {
    await restaurant.navigate();
    await restaurant.click(restaurant.email);
});

test('Send Message', async () => {
    await restaurant.navigate();
    await restaurant.setInput(restaurant.firstName, "Josh");
    await restaurant.setInput(restaurant.lastName, "Powell");
    await restaurant.setInput(restaurant.emailAdd, "testemail@gmail.com");
    await restaurant.setInput(restaurant.phoneNum, 1234567890);
    await restaurant.setInput(restaurant.comment, "great food!");
    await restaurant.restaurantScreeshot(restaurant.sendMessage);
    await restaurant.driver.quit();
});