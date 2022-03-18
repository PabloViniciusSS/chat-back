import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { UserToken } from './models/UserToken';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: User): UserToken;
    validateUser(name: string, password: string): Promise<User>;
}
