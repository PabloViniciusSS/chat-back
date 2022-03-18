import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private logger;
    afterInit(server: Server): void;
    handleMessage(client: Socket, message: string): void;
    handleConnection(UserToken: any, ...args: any[]): void;
    handleDisconnect(UserToken: any): void;
}
