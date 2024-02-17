import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserRepository } from './user.repository';
import { DBModule } from 'src/shared/db/db.module';
import { User, UserSchema } from './entities/user.entity';

@Module({
  imports: [DBModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UsersResolver, UsersService, UserRepository],
})
export class UsersModule {}
