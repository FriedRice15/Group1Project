import { groupproject } from "./tenishaPage";
const page = new groupproject()

test('menutabs', async () =>{
    page.navigate();
    page.click(page.menu);
    page.click(page.about);
    page.click(page.services);
    page.click(page.gallery);
    page.click(page.contact);
    page.click(page.home);
    page.driver.quit()
})