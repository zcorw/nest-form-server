import { IsString, IsInt, IsEmail } from 'class-validator';

export class UserDto {

  @IsString()
  readonly username: string;

  @IsEmail()
  readonly mail: string;

  @IsInt()
  readonly status: number;

  @IsInt()
  readonly type: number;
}