import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'src/models/user.model';
import { UserSchema } from 'src/schemas/user.schema';
import { Repository } from 'typeorm';

import { hashPassword } from 'utils/hashFunction';

@Controller('/user')
export class UserController {
  constructor(
    @InjectRepository(UserModel) private model: Repository<UserModel>,
  ) {}

  @Post()
  public async create(@Body() body: UserSchema): Promise<{ data: UserModel }> {
    body.password = await hashPassword(body.password);
    const newUser = await this.model.save(body);
    return { data: newUser };
  }

  @Get()
  public async getAll(): Promise<{ data: UserModel[] }> {
    const list = await this.model.find();
    return { data: list };
  }

  @Get(':id')
  public async getOne(@Param('id') id: string): Promise<{ data: UserModel }> {
    const user = await this.model.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { data: user };
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() body: UserSchema,
  ): Promise<{ data: UserModel }> {
    const user = await this.model.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    body.password = await hashPassword(body.password);
    await this.model.update({ id }, body);

    const updatedUser = await this.model.findOne({ where: { id } });

    return { data: updatedUser };
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<string> {
    await this.model.delete({ id });
    return 'User deleted';
  }
}
