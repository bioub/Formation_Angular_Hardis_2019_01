import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  fillNewTodo(value) {
    return element(by.css('form input')).sendKeys(value);
  }

  submitForm() {
    return element(by.css('form')).submit();
  }

  getTodoItemsCount() {
    return element.all(by.css('todo-item')).count();
  }
}
