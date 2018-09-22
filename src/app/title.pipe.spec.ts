import { TitlePipe } from './title.pipe';

describe('TitlePipe', () => {
  it('create an instance', () => {
    const pipe = new TitlePipe();
    expect(pipe).toBeTruthy();
  });

  it('Transform title and title text', () => {
    const pipe = new TitlePipe();
    const result = pipe.transform('Hello World','Title');
    expect(result).toEqual("Title : Hello World");
  });

});
