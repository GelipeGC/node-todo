const fs = require('fs');

let listTODO = [];

const saveDB = () => {
    let data = JSON.stringify(listTODO);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
        
    
    });
}

const loadDB = () => {
    try {        
        listTODO = require('../db/data.json');
    } catch (error) {
        listTODO = [];
    }

}



const create = (description) => {

    loadDB();

    let todo = {
        description,
        completed: false
    };

    listTODO.push(todo);

    saveDB(); 

    return todo;
}
const getList = () => {
    loadDB();
    return listTODO;
}

const update = (description, completed = true) => {
    loadDB();

    let index = listTODO.findIndex( task => task.description === description);

    if ( index >= 0) {
        listTODO[index].completed = completed;

        saveDB();

        return true;
    }

    return false;
}

const destroyed = (description) => {
    loadDB();

    let index = listTODO.findIndex( task => task.description === description);

    if (index >= 0) {
        listTODO.splice(index, 1);

        saveDB();

        return true;
    }

    return false;
};

module.exports = {
    create,
    getList,
    update,
    destroyed
}