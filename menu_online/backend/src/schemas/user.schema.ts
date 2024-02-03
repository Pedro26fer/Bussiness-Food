import {
  IsString,
  IsAlphanumeric,
  IsEmail,
  MaxLength,
} from 'class-validator';

export class UserSchema {
  @IsString()
  @MaxLength(120)
  name: string;

  @IsEmail()
  @IsString()
  @MaxLength(255)
  email: string;

  @IsString()
  @IsAlphanumeric()
  @MaxLength(255)
  password: string;
}
