import { IsInt, IsArray } from 'class-validator';

export class pageDto {
  @IsInt()
  readonly pageSize: number;

  @IsInt()
  readonly page: number;
}

export class reponseDto<T> {
  @IsInt()
  readonly total: number;

  @IsArray()
  readonly data: T[];
}