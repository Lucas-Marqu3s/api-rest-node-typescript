import { Knex } from '../../knex';
import { ETableNames } from "../../ETableNames";
import { ICidade } from "../../models";

export const getById = async (id: number): Promise<ICidade | Error> =>{
  try{ 
    const result = await Knex(ETableNames.cidade).select('*').where('id', '=', id).first();

    if(result) return result; 
    
    return new Error('Registro não encontrado');
    
  } catch(error){ //Caso de erro, irá retornar uma mensagem
    console.log(error);
    return new Error('Erro ao consultar o registro');
  }

};