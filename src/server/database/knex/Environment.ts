import { Knex } from 'knex';
import path from 'path';

// Aqui quando é executado é salvo no banco
export const development: Knex.Config = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname,'..','..','..','..','database.sqlite')
  },
  migrations:{
    directory: path.resolve(__dirname,'..','migrations'),
  },
  seeds:{
    directory: path.resolve(__dirname,'..','seeds'),
  },
  pool:{
    afterCreate: (connection: any, done: Function) =>{
      connection.run('PRAGMA foreign_keys = ON');
      done();
    }
  }
};

//Aqui as configurações são herdadas, porém os dados são temporários, quando se encerrar, eles somem
export const test: Knex.Config = {
  ...development,
  connection: ':memory:',
};

//Aqui em produção é herdado igual o desenvolvimento
export const production: Knex.Config = {
  ...development,
};