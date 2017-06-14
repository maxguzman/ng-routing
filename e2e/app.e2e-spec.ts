import { NgRoutingPage } from './app.po';

describe('ng-routing App', () => {
  let page: NgRoutingPage;

  beforeEach(() => {
    page = new NgRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
