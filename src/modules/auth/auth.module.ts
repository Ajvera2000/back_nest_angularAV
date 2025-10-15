import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtstrategy } from './jwt.strategy';

@Module({
  imports:[
    JwtModule.register({
      secret:"MI CODIGO SECRETO",
      signOptions:{expiresIn:"605"}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,jwtstrategy]
})
export class AuthModule {}
