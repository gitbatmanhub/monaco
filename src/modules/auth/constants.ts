import { SetMetadata } from '@nestjs/common';
import * as process from 'node:process';

export const jwtConstant = {
  secret: process.env.SECRETJWT || 'secretKey',
};

export const IS_PUBLIC_KEY = process.env.SECRETJWT || 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const RoleCodes = [
  {
    CODEADMIN: 1,
    CODEUSER: 2,
  },
];
