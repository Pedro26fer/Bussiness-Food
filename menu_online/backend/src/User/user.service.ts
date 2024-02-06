import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './user.model';
import { Repository } from 'typeorm';
import { UserSchema } from 'src/schemas/user.schema';
import { hashPassword } from 'utils/hashFunction';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  public async create(userSchema: UserSchema): Promise<UserModel> {
    userSchema.password = await hashPassword(userSchema.password);
    const emailUnavaible = await this.userRepository.findOne({where:{email: userSchema.email}})
    if(emailUnavaible){
      throw new ForbiddenException("this email is already used")
    }
    const newUser = await this.userRepository.save(userSchema);
    return newUser;
  }

  public async getAll(): Promise<UserModel[]> {
    const users = await this.userRepository.find();
    return users;
  }

  public async getOne(id: string): Promise<UserModel> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  public async update(id: string, body: UserSchema): Promise<UserModel> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    body.password = await hashPassword(body.password);
    const updateResult = await this.userRepository.update(id, body);
    if (updateResult.affected === 0) {
      throw new NotFoundException('User not found');
    }
    const userUpdated = { ...user, ...body };
    return userUpdated;
  }

  public async delete(id: string): Promise<string> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.delete(id);
    return 'User was deleted';
  }
}
