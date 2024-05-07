import { Knex } from '../../knex';
import { ICidade } from "../../models";
import { ETableNames } from "../../ETableNames";

//Configurando para cadastrar no banco de dados
export const create = async (cidade: Omit<ICidade, 'id'>): Promise<number | Error> =>{
  try{ //Caso de certo, irá cadastrar e irá retornar o id
    const[result] = await Knex(ETableNames.cidade).insert(cidade).returning('id');

    if(typeof result === 'object'){
      return result.id;
    } else if(typeof result === 'number'){
      return result;
    }
    
    return new Error('Erro ao cadastrar o registro');
    
  } catch(error){ //Caso de erro, irá retornar uma mensagem
    console.log(error);
    return new Error('Erro ao cadastrar o registro');
  }

};