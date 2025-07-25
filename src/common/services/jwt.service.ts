import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

interface ISignPayload {
  id: string;
  phone: string;
}
@Injectable()
export class JwtService {
  constructor(
    private readonly jwt: NestJwtService,
    private readonly configService: ConfigService,
  ) {}

  sign(payload: ISignPayload): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const secret = this.configService.get<string>('JWT_SECRET');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const expiresIn = this.configService.get<string>('JWT_EXPIRES_IN');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return this.jwt.sign(payload, {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      secret,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      expiresIn,
    });
  }

  verify(token: string): any {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const secret = this.configService.get<string>('JWT_SECRET');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      return this.jwt.verify(token, { secret });
    } catch (error) {
      throw new Error('Invalid token', error as Error);
    }
  }
}
