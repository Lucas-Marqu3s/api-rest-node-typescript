import { Request, Response } from "express";
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from "http-status-codes";
import { ICidade } from "../../database/models";
import { CidadesProvider } from "../../database/providers/cidades";

//está omitindo o campo id, pois ele é auto incremento
interface IBodyProps extends Omit<ICidade, 'id'>{}

//validação do campo nome, onde ele não pode ser menor que 3 caracter
export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3).max(150),
  })),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  //enviando a criação
  const result = await CidadesProvider.create(req.body);

  //Se der erro, vai mostrar o erro  
  if(result instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  //Caso der certo, mostra o resultado
  return res.status(StatusCodes.CREATED).json(result);
};