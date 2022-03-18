import { UserFromJwt } from '../models/UserFromJwt';
import { UserPayload } from '../models/UserPayload';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: UserPayload): Promise<UserFromJwt>;
}
export {};
