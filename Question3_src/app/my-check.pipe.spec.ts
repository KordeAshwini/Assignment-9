import { MyCheckPipe } from './my-check.pipe';

describe('MyCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new MyCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
