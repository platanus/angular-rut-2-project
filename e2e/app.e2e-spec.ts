import { Angular2RutProjectPage } from './app.po';

describe('angular2-rut-project App', function() {
  let page: Angular2RutProjectPage;

  beforeEach(() => {
    page = new Angular2RutProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
