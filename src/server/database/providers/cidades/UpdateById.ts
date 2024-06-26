import { Knex } from '../../knex';
import { ICidade } from "../../models";
import { ETableNames } from "../../ETableNames";

export const updateById = async (id: number, cidade: Omit<ICidade, 'id'>): Promise<void | Error> =>{
  try{ 
    const result = await Knex(ETableNames.cidade).update(cidade).where('id', '=', id);

    if(result > 0) return; 
    
    return new Error('Erro ao atualizar o registro');
    
  } catch(error){ //Caso de erro, irá retornar uma mensagem
    console.log(error);
    return new Error('Erro ao atualizar o registro');
  }

};