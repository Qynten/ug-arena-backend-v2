import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(userId: string): Promise<{
        name: string | null;
        id: string;
        status: import(".prisma/client").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        photo: string | null;
        contactNO: string | null;
        location: string | null;
        roles: import(".prisma/client").$Enums.UserRole[];
        isBlocked: boolean;
    } | null>;
}
