import { registerEnumType } from '@nestjs/graphql';

export enum QueryModeEnum {
  default = 'default',
  insensitive = 'insensitive',
}

registerEnumType(QueryModeEnum, { name: 'QueryMode', description: undefined });
