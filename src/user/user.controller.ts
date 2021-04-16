import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { pageDto } from '../app.dto';
import { BOOK, VIDEO } from 'src/utils/type';

export type UserType = {
  firstName: string;
  lastName: string;
  username: string;
  tgId: number;
  chatId: number;
  mail: string;
}
@Controller('user')
export class UserController {
  constructor(private readonly UesrService: UserService) { }

  @Post('video')
  video(@Body() pageInfo: pageDto) {
    return this.UesrService.findVideoUser(pageInfo);
  }

  @Post('book')
  book(@Body() pageInfo: pageDto) {
    return this.UesrService.findBookUser(pageInfo);
  }

  @Post('audio')
  audio(@Body() pageInfo: pageDto) {
    return this.UesrService.findAudioUser(pageInfo);
  }

  @Post('add/video')
  createVideo(@Body() user: UserType) {
    return this.UesrService.createUser({
      ...user,
      status: 0,
      type: VIDEO,
    }).then((res) => ({
      code: 0,
      data: res
    })).catch((e) => ({
      code: 461,
      message: e.message
    }))
  }

  @Post('add/book')
  createBook(@Body() user: UserType) {
    return this.UesrService.createUser({
      ...user,
      status: 0,
      type: BOOK,
    }).then((res) => ({
      code: 0,
      data: res
    })).catch((e) => ({
      code: 461,
      message: e.message
    }))
  }
}
