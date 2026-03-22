import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, UserRole, UserStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { accounts: true },
    });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: {
    email: string;
    discordName?: string;
    photo?: string;
    provider: 'DISCORD';
    providerAccountId: string;
  }) {
    return this.prisma.user.create({
      data: {
        email: data.email,
        discordName: data.discordName,
        photo: data.photo,
        status: UserStatus.ACTIVE,
        roles: [UserRole.PLAYER],
        accounts: {
          create: {
            provider: data.provider,
            providerAccountId: data.providerAccountId,
          },
        },
      },
      include: { accounts: true },
    });
  }

  async updateRefreshToken(userId: string, refreshToken: string | null) {
    let hash: string | null = null;
    if (refreshToken) {
      hash = await bcrypt.hash(refreshToken, 10);
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshTokenHash: hash },
    });
  }

  async findByIdWithExclude(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (user) {
      const { password, refreshTokenHash, ...result } = user;
      return result;
    }
    return null;
  }
}
