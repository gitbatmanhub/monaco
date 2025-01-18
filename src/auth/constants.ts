import { SetMetadata } from '@nestjs/common';

export const jwtConstant = {
  secret: 'This is my word secret',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
