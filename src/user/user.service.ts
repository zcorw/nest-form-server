import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from './user.entity';
import { Repository, createQueryBuilder } from 'typeorm';
import { UserDto } from './user.dto';
import { pageDto, reponseDto } from '../app.dto';
import { VIDEO, BOOK, AUDIO } from '../utils/type';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  private findUser(pageInfo: pageDto, type: number): Promise<reponseDto<UserDto>> {
    const { page, pageSize } = pageInfo;
    return this.userRepository.createQueryBuilder()
      .where({ type, status: 0 })
      .skip(pageSize * (page - 1))
      .take(page)
      .getManyAndCount()
      .then(([data, total]) => ({
        data,
        total
      }));
  }

  async findVideoUser(pageInfo: pageDto): Promise<reponseDto<UserDto>> {
    return this.findUser(pageInfo, VIDEO);
  }

  async findBookUser(pageInfo: pageDto): Promise<reponseDto<UserDto>> {
    return this.findUser(pageInfo, BOOK);
  }

  async findAudioUser(pageInfo: pageDto): Promise<reponseDto<UserDto>> {
    return this.findUser(pageInfo, AUDIO);
  }

  async createUser(data: UserEntity) {
    // const count = await this.userRepository.createQueryBuilder().where({ tgId: data.tgId }).getCount();
    // if (count === 0 || process.env.NODE_ENV === 'development') {
      return this.userRepository.save(data);
    // } else {
    //   throw new Error('当前账号已登记过');
    // }
  }

  async updateStatus(id: number, status: number) {
    return this.userRepository.update(id, { status });
  }
}
