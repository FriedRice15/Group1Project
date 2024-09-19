import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";
 
export class HotoffdeGrill extends BasePage {
    insta: By = By.xpath ('(//span[@class="dmSocialInstagram dm-social-icons-instagram oneIcon socialHubIcon style8"])');
    email: By = By.xpath ('(//p[@class="m-text-align-center"])[28]');
    sendMessage: By = By.id ('[id="1627590857"]');
    about: By = By.xpath ('(//span[@class="nav-item-text "])[9]');
    firstName: By = By.id ('[id="1980497798"]');
    lastName: By = By.id ('[id="1789199066"]');
    emailAdd: By = By.id ('[id="1440555156"]');
    phoneNum: By = By.id ('[id="1154878065"]');
    comment: By = By.id ('[id="1872492295"]');
    //add more

    constructor() {
        super({url:"https://www.hotoffdegrill.com/"});
    };
};