import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Controller('/user')
export class UserController {
  constructor(
    @InjectRepository(UserModel) private model: Repository<UserModel>,
  ) {}

  @Post()
  public create(): any {
    return { data: 'Created' };
  }

  @Get()
  public async getAll(): Promise<{ data: UserModel[] }> {
    const list = await this.model.find();
    return { data: list };
  }

  @Get(':id')
  public getOne(): any {
    return { data: 'GettedOne' };
  }

  @Put(':id')
  public update(): any {
    return { data: 'Updated' };
  }

  @Delete(':id')
  public delete(): any {
    return { data: 'Deleted' };
  }
}
