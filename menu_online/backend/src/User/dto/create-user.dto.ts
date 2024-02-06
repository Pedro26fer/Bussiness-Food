import { IsString, IsEmail, MaxLength, MinLength, Matches } from 'class-validator';
import { UserModel } from '../user.model';

export class CreateUserDto extends UserModel {

  @IsString()
  id: string;
  
  @IsString()
  @MaxLength(120)
  name: string;
 
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}

