import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<({
        accounts: {
            id: string;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            createdAt: Date;
            updatedAt: Date;
            provider: import(".prisma/client").$Enums.AuthProvider;
            providerAccountId: string;
            accessToken: string | null;
            refreshToken: string | null;
            expiresAt: Date | null;
            userId: string;
        }[];
    } & {
        name: string | null;
        id: string;
        status: import(".prisma/client").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        refreshTokenHash: string | null;
        photo: string | null;
        contactNO: string | null;
        location: string | null;
        roles: import(".prisma/client").$Enums.UserRole[];
        isBlocked: boolean;
    }) | null>;
    findById(id: string): Promise<{
        name: string | null;
        id: string;
        status: import(".prisma/client").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        refreshTokenHash: string | null;
        photo: string | null;
        contactNO: string | null;
        location: string | null;
        roles: import(".prisma/client").$Enums.UserRole[];
        isBlocked: boolean;
    } | null>;
    create(data: {
        email: string;
        name?: string;
        photo?: string;
        provider: 'DISCORD';
        providerAccountId: string;
    }): Promise<{
        accounts: {
            id: string;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            createdAt: Date;
            updatedAt: Date;
            provider: import(".prisma/client").$Enums.AuthProvider;
            providerAccountId: string;
            accessToken: string | null;
            refreshToken: string | null;
            expiresAt: Date | null;
            userId: string;
        }[];
    } & {
        name: string | null;
        id: string;
        status: import(".prisma/client").$Enums.UserStatus;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        refreshTokenHash: string | null;
        photo: string | null;
        contactNO: string | null;
        location: string | null;
        roles: import(".prisma/client").$Enums.UserRole[];
        isBlocked: boolean;
    }>;
    updateRefreshToken(userId: string, refreshToken: string | null): Promise<void>;
    findByIdWithExclude(id: string): Promise<{
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
