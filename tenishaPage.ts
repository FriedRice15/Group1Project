import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

export class groupproject extends BasePage {
    createAccount: By=By.xpath('//span[@id="1821609554"]')
    home: By=By.xpath('(//a[@class="unifiednav__item dmUDNavigationItem_00 currentPage dmNavItemSelected"])[1]')
    menu: By=By.xpath('(//a[@class="unifiednav__item dmUDNavigationItem_010101111478 currentPage dmNavItemSelected"])[1]')
    about: By=By.xpath('(//a[@class="unifiednav__item dmUDNavigationItem_010101585118"])[1]')
    services: By=By.xpath('(//a[@class="unifiednav__item dmUDNavigationItem_010101729006"])[1]')
    gallery: By=By.xpath('(//a[@class="unifiednav__item dmUDNavigationItem_010101988326"])[1]')
    contact: By=By.xpath('(//a[@class="unifiednav__item dmUDNavigationItem_01010157317"])[1]')


    constructor(){
        super({url: "https://www.hotoffdegrill.com/"})
    }
}