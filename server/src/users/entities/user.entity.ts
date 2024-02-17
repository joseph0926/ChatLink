import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractEntity } from './../../shared/db/abstract.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Schema({ versionKey: false })
@ObjectType()
export class User extends AbstractEntity {
  @Prop()
  @Field()
  username?: string;

  @Prop()
  @Field()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
