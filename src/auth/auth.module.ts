import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'mySecretKey', // Use environment variables in production
      signOptions: { expiresIn: '60m' },
    }),
    UserModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
