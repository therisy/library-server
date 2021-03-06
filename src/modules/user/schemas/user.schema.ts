import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, Length } from 'class-validator';
import { RoleTypes } from '@/core/enums/role.enum';

export type UserDocument = User & Document;

@Schema({
  versionKey: false,
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
})
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  @IsEmail()
  email: string;

  @Prop({ required: true })
  @Length(5, 25)
  password: string;

  @Prop({ required: true })
  role: RoleTypes;

  @Prop()
  createdAt: number;

  @Prop()
  updatedAt: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
