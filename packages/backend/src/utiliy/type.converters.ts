import { classToPlain, plainToClass } from 'class-transformer';

const convertEntitiesToDTOs = (entities: any, dtoClass: any) => {
  return plainToClass(dtoClass, classToPlain(entities));
};

export default convertEntitiesToDTOs;
