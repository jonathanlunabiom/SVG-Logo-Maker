const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle,Circle,Square,Shape} = require('./lib/shapes');
const Svg = require('./lib/svg.js');


inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Set text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Enter a shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Enter a shape color',
    },
    ])
.then((a) => {
    let shape;

    switch(a.shape){
        case 'circle':
            shape = new Circle()
        break;
        case 'square':
            shape = new Square()
        break;
        default:
            shape = new Triangle()
    } 

    shape.setColor(a.shapecolor)
    const svg = new Svg()
    svg.setText(a.text,a.color)
    svg.setShape(shape)

   return fs.writeFile('mylogo.svg',svg.render(),(err)=>{
        if (err) throw err;
        console.log('The file has been saved!');
    })
})
.catch(err => console.log(`error ${err.message}`));