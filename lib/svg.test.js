const SVG = require('./svg')
const {Triangle,Circle,Square} = require('./shapes');

test('trying to render svg element', () => {
    const test = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
    const svg = new SVG()
    expect(svg.render()).toEqual(test)
});