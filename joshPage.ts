import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";
const fs = require('fs');
 
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
    popUp: By = By.xpath ('(//div[@class="dmPopupClose dm-common-icons-close oneIcon"])[1]');
    constructor() {
        super({url:"https://www.hotoffdegrill.com/"});
    };

    async restaurantScreenshot(elementBy: By) {
    const hover = this.driver.actions();
    const startElement = await this.getElement(elementBy);
    await this.actionWiggle(hover, startElement, 100);
    await hover.perform();
    await fs.writeFile(`#{__dirname}/hoverPhoto.png`,
        await this.driver.takeScreenshot(), "base64",
        (e) => {
            if(e) console.error(e)
                else console.log
        }
    )};
    async instaTabs() {
        let myTabs = await this.driver.getAllWindowHandles();
        await  this.driver.switchTo().window(myTabs[1]);
        fs.writeFile(`${__dirname})/this.insta.png`,
            await this.driver.takeScreenshot(),"base64",
            (e) => {
                if(e) console.log(e)
                    else console.log('da screenshot');
            });
            await this.driver.close();
            await this.driver.switchTo().window(myTabs[0]);
    };
    async emailTabs() {
        let myTabs = await this.driver.getAllWindowHandles();
        await  this.driver.switchTo().window(myTabs[1]);
        fs.writeFile(`${__dirname})/email.png`,
            await this.driver.takeScreenshot(),"base64",
            (e) => {
                if(e) console.log(e)
                    else console.log('da screenshot');
            });
            await this.driver.close();
            await this.driver.switchTo().window(myTabs[0]);  
        };
        async scrollToElement(elementBy: By) {
            const scrollThing = await this.getElement(elementBy);
            await this.driver.actions()
            .move({origin: scrollThing})
            .perform()
        };
};