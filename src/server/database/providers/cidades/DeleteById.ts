import { Knex } from '../../knex';
import { ETableNames } from "../../ETableNames";

export const deleteById = async (id: number): Promise<void | Error> =>{
  try{ 
    const result = await Knex(ETableNames.cidade).where('id', '=', id).del();

    if(result > 0) return; 
    
    return new Error('Erro ao apagar o registro');
    
  } catch(error){ //Caso de erro, irá retornar uma mensagem
    console.log(error);
    return new Error('Erro ao apagar o registro');
  }

};