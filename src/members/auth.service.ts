import { Injectable } from '@nestjs/common';
import { MembersService } from './members.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: MembersService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    
    const user = await this.usersService.findOneMember(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}