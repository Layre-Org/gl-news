import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.schema';
import { hash } from 'bcrypt';
import { IdMiddleware } from 'src/middlewares/id.middleware';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;

          schema.pre('save', async function (next) {
            if (!this.isModified('password')) {
              return next();
            }

            this.password = await hash(this.password, 10);

            next();
          });

          return schema;
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IdMiddleware).forRoutes('user/:id');
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'user', method: RequestMethod.POST })
      .forRoutes('user', 'user/:id', 'user/news/:id');
  }
}
