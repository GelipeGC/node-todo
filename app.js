//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'crear':
        let tarea = todo.create(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let list = todo.getList();

        for (let task of list) {
            console.log('=====TODO====='.green);
            console.log(task.description);
            console.log('Estado: ', task.completed);
            console.log('=============='.green);
            
        }
        break;
    case 'actualizar':
        let updated = todo.update(argv.descripcion, argv.completado);
        console.log(updated)
        break;
    case 'borrar':
        let destroyed = todo.destroyed(argv.descripcion);
        console.log(destroyed);
        break;
    default:
        console.log('COmando no reconocido')
        break;
}