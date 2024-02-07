import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './user.model';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/User/dto/create-user.dto';
import { hashPassword } from 'utils/hashFunction';
import { Request } from '@nestjs/common';
import { AuthRequest } from 'src/auth/models/AuthRequest';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  public async create(userSchema: CreateUserDto): Promise<UserModel> {
    userSchema = {
      ...userSchema,
      password: hashPassword(userSchema.password),
    };

    const emailUnavaible = await this.userRepository.findOne({
      where: { email: userSchema.email },
    });
    if (emailUnavaible) {
      throw new ForbiddenException('this email is already used');
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

  public async update(
    req: AuthRequest,
    id: string,
    body: CreateUserDto,
  ): Promise<UserModel> {
    const userIdFromToken = req.user.id;
    if (id !== userIdFromToken) {
      throw new UnauthorizedException(
        'You have not permission to do this action!',
      );
    }

    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    body.password = hashPassword(body.password);
    const updateResult = await this.userRepository.update(id, body);
    if (updateResult.affected === 0) {
      throw new NotFoundException('User not found');
    }
    const userUpdated = { ...user, ...body };
    return userUpdated;
  }

  public async delete(req: AuthRequest, id: string): Promise<string> {
    const userIdFromToken = req.user.id;
    if (id !== userIdFromToken) {
      throw new UnauthorizedException(
        'You have not permission to do this action!',
      );
    }
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.delete(id);
    return 'User was deleted';
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new BadRequestException('Invalid Credentials');
    }
    return user;
  }
}
