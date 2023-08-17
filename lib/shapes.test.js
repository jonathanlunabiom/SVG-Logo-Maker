const {Triangle,Circle,Square} = require('./shapes');

test('must return the shape with the fill blue' , ()=>{
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
})