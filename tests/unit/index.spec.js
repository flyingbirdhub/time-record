import plugin from '@/index';
import * as babylon from 'babylon';
import traverse from 'babel-traverse';
import generate from 'babel-generator';

describe('tests for time record babel plugin', () => {
  const code = `const asyncFn = ms => new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
      });
      
      const record = {
        start: 0,
        time: 0,
      };
      
      const fn = async () => {
        await asyncFn(100);
        console.log(record.time);
      }
      
      fn();`;
  it('should generate code correctly', () => {
    const ast = babylon.parse(code);
    traverse(ast, plugin().visitor);
    expect(generate(ast).code).toMatchInlineSnapshot(`
"const asyncFn = ms => new Promise((resolve, reject) => {
  setTimeout(resolve, ms);
});

const record = {
  start: 0,
  time: 0
};

const fn = async () => {
  record.start = performance.now();
  record.time = performance.now() - record.start;

  await asyncFn(100);
  record.start = performance.now();
  record.time = performance.now() - record.start;
  console.log(record.time);
};

fn();"
`);
  });
});
