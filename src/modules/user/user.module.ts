import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import config from '@config';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserSchema } from './schemas/user.schema';
import { BookSchema } from '../book/schemas/book.schema';
import { BorrowSchema } from '../borrow/schemas/borrow.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Book', schema: BookSchema },
      { name: 'Borrow', schema: BorrowSchema },
    ]),
    JwtModule.register({
      secret: config.secret,
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
