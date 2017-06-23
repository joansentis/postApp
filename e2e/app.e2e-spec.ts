import { Datapath.IoPage } from './app.po';

describe('datapath.io App', () => {
  let page: Datapath.IoPage;

  beforeEach(() => {
    page = new Datapath.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
