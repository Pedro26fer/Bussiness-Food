import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserModel } from 'src/User/user.model';
import { UserSchema } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async create(@Body() body: UserSchema): Promise<{ data: UserModel }> {
    const newUser = await this.userService.create(body);
    return { data: newUser };
  }

  @Get()
  public async getAll(): Promise<{ data: UserModel[] }> {
    const list = await this.userService.getAll()
    return {data: list}
  }

  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<{ data: UserModel }> {
    const user = await this.userService.getOne(id)
    return { data: user };
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() body: UserSchema,
  ): Promise<{ data: UserModel }> {
    const userUpdated = await this.userService.update(id, body)
    return { data: userUpdated };
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<string> {
    const msg = await this.userService.delete(id)
    return msg
  }
}
