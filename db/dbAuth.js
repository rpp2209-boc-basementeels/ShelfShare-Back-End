const db = require('./index.js');

// Authorization
// Check the database for hash, user
const constructWhere = (obj) => {
  var result = 'WHERE ';
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (isNaN(obj[keys[i]]) === false) {
      result += `${keys[i]} = ${obj[keys[i]]}`;
    } else {
      result += `${keys[i]} = '${obj[keys[i]]}'`;
    }
    if (i !== keys.length - 1) {
      result += ',';
    }
  }
  return result;
};

const constructValues = (obj) => {
  var column = '';
  var values = '';
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (i === 0) {
      column += '(';
      values += '(';
    }

    column += `${keys[i]}`;
    if (isNaN(obj[keys[i]]) === false) {
      values += `${obj[keys[i]]}`;
    } else {
      values += `'${obj[keys[i]]}'`;
    }

    if (i === keys.length - 1) {
      column += ')';
      values += ')';
    } else {
      column += ',';
      values += ',';
    }
  }
  return `${column} VALUES ${values}`;
};

const constructSet = (obj) => {
  var result = 'SET ';
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    result += `${keys[i]} = `;
    if (isNaN(obj[keys[i]]) === false) {
      result += `${obj[keys[i]]}`;
    } else {
      result += `'${obj[keys[i]]}'`;
    }
    if (i !== keys.length - 1) {
      result += ', ';
    }
  }
  return result;
};

const checkTable = (table, obj, callback) => {
  db.query(`SELECT * FROM ${table} ${constructWhere(obj)};`)
    .then(data => callback(null, data.rows))
    .catch(err => callback(err));
};

const addToTable = (table, obj, callback) => {
  db.query(`INSERT INTO ${table} ${constructValues(obj)};`)
    .then(data => callback(null, data))
    .catch(err => callback(err));
};

const updateTable = (table, whereObj, setObj, callback) => {
  db.query(`UPDATE ${table} ${constructSet(setObj)} ${constructWhere(whereObj)};`)
    .then(data => callback(null, data))
    .catch(err => callback(err));
};

const deleteFromTable = (table, obj, callback) => {
  db.query(`DELETE FROM ${table} ${constructWhere(obj)};`)
    .then(data => callback(null, data))
    .catch(err => callback(err));
};

const getID = (table, obj, callback) => {
  db.query(`SELECT user_id FROM ${table} ${constructWhere(obj)};`)
    .then(data => callback(null, data.rows))
    .catch(err => callback(err));
};

module.exports = { checkTable, addToTable, updateTable, getID, deleteFromTable }