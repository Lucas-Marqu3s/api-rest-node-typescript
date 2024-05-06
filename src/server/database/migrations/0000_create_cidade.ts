import type { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

//colocando os dados do banco sqlite
export async function up(knex: Knex) {
  return knex.schema.createTable(ETableNames.cidade, table =>{
    //Dado auto incremento com chave primária
    table.bigIncrements('id').primary().index();
    table.string('nome', 150).index().notNullable;
    table.comment('Tabela usada para armazenar cidades do sistema.');
  })
  .then(() =>{
    console.log(`# Created table ${ETableNames.cidade}`);
  });
}

//Usado para voltar os dados da tabela, excluindo as opeções executadas
export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.cidade)

  .then(() =>{
    console.log(`# Dropped table ${ETableNames.cidade}`);
  });
}