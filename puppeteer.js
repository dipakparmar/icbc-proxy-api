const puppeteer = require("puppeteer"); // v23.0.0 or later

// Update the loginData object with your ICBC login information before running the script
const loginData = {
  lastName: "Doe",
  licenseNumber: "1234567",
  keyword: "password",
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1372,
      height: 1248,
    });
  }
  {
    const targetPage = page;
    const promises = [];
    const startWaitingForEvents = () => {
      promises.push(targetPage.waitForNavigation());
    };
    startWaitingForEvents();
    await targetPage.goto("https://onlinebusiness.icbc.com/webdeas-ui/home");
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Next)"),
      targetPage.locator("button"),
      targetPage.locator(
        "::-p-xpath(/html/body/app-root/app-home/mat-card/div[3]/div[3]/button)"
      ),
      targetPage.locator(":scope >>> button"),
      targetPage.locator("::-p-text(Next)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 82.078125,
          y: 31.5,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator(
        "span:nth-of-type(1) > div > div:nth-of-type(1) div.mat-form-field-infix"
      ),
      targetPage.locator(
        "::-p-xpath(/html/body/app-root/app-login/mat-card/mat-card-content/form/span[1]/div/div[1]/div/mat-form-field/div/div[1]/div[3])"
      ),
      targetPage.locator(
        ":scope >>> span:nth-of-type(1) > div > div:nth-of-type(1) div.mat-form-field-infix"
      ),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 276,
          y: 26.5,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(driver-name)"),
      targetPage.locator("#mat-input-0"),
      targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-0\\"])'),
      targetPage.locator(":scope >>> #mat-input-0"),
    ])
      .setTimeout(timeout)
      .fill(loginData.lastName);
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(driver-licence)"),
      targetPage.locator("#mat-input-1"),
      targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-1\\"])'),
      targetPage.locator(":scope >>> #mat-input-1"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 151,
          y: 1.5,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(driver-licence)"),
      targetPage.locator("#mat-input-1"),
      targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-1\\"])'),
      targetPage.locator(":scope >>> #mat-input-1"),
    ])
      .setTimeout(timeout)
      .fill(loginData.licenseNumber);
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(keyword)"),
      targetPage.locator("#mat-input-2"),
      targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-2\\"])'),
      targetPage.locator(":scope >>> #mat-input-2"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 114,
          y: 6,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(keyword)"),
      targetPage.locator("#mat-input-2"),
      targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-2\\"])'),
      targetPage.locator(":scope >>> #mat-input-2"),
    ])
      .setTimeout(timeout)
      .fill(loginData.keyword);
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("form > span:nth-of-type(2)"),
      targetPage.locator(
        "::-p-xpath(/html/body/app-root/app-login/mat-card/mat-card-content/form/span[2])"
      ),
      targetPage.locator(":scope >>> form > span:nth-of-type(2)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 341,
          y: 156.5,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("span.mat-checkbox-inner-container"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"mat-checkbox-1\\"]/label/span[1])'
      ),
      targetPage.locator(":scope >>> span.mat-checkbox-inner-container"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 7,
          y: 21,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('::-p-aria(Sign in[role=\\"button\\"])'),
      targetPage.locator("div:nth-of-type(2) > button"),
      targetPage.locator(
        "::-p-xpath(/html/body/app-root/app-login/mat-card/mat-card-content/form/div[2]/div[2]/button)"
      ),
      targetPage.locator(":scope >>> div:nth-of-type(2) > button"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 83,
          y: 33,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Reschedule appointment)"),
      targetPage.locator("div.appointments-cards-container button.primary"),
      targetPage.locator(
        "::-p-xpath(/html/body/app-root/app-driver/div/mat-card/div[5]/div[1]/app-appointments/div/div[2]/div/div[4]/button[1])"
      ),
      targetPage.locator(
        ":scope >>> div.appointments-cards-container button.primary"
      ),
      targetPage.locator("::-p-text(Reschedule appointment)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 217.015625,
          y: 18,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Yes)"),
      targetPage.locator("div.cdk-overlay-container button.primary"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"mat-dialog-0\\"]/app-cancel/div/div/div[5]/button[1])'
      ),
      targetPage.locator(":scope >>> div.cdk-overlay-container button.primary"),
      targetPage.locator("::-p-text(Yes)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 160,
          y: 28.5,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div.mat-form-field-infix"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"mat-tab-content-2-0\\"]/div/div/mat-form-field/div/div[1]/div[3])'
      ),
      targetPage.locator(":scope >>> div.mat-form-field-infix"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 254,
          y: 13,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("::-p-aria(Number)"),
      targetPage.locator("#mat-input-3"),
      targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-3\\"])'),
      targetPage.locator(":scope >>> #mat-input-3"),
    ])
      .setTimeout(timeout)
      .fill("Kamloops, BC");
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("#mat-option-8 > span"),
      targetPage.locator('::-p-xpath(//*[@id=\\"mat-option-8\\"]/span)'),
      targetPage.locator(":scope >>> #mat-option-8 > span"),
      targetPage.locator("::-p-text(Kamloops, BC)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 153,
          y: 15.5,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div.cdk-overlay-container span.mat-button-wrapper"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"search-dialog\\"]/app-search-modal/div/div/form/div[2]/button/span[1])'
      ),
      targetPage.locator(
        ":scope >>> div.cdk-overlay-container span.mat-button-wrapper"
      ),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 42.765625,
          y: 2.375,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div.first-office-container > div"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"search-dialog\\"]/app-search-modal/div[2]/div/div[2]/div[2]/div)'
      ),
      targetPage.locator(":scope >>> div.first-office-container > div"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 343,
          y: 44.875,
        },
      });
  }
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator("div.view-more-btn"),
      targetPage.locator(
        '::-p-xpath(//*[@id=\\"mat-dialog-1\\"]/app-eligible-tests/div/div[2]/mat-button-toggle-group/div/div[2])'
      ),
      targetPage.locator(":scope >>> div.view-more-btn"),
      targetPage.locator("::-p-text(VIEW MORE)"),
    ])
      .setTimeout(timeout)
      .click({
        offset: {
          x: 210,
          y: 19.6015625,
        },
      });
  }

  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
