import { browser, element, by } from 'protractor';

export class NewPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('frame-root h1')).getText();
  }
}
