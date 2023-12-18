import { Cart } from '@quickcart/users/domain/entities/cart';

export const UserStatus = {
  Active: 'Active',
  Inactive: 'Inactive',
  PendingVerification: 'PendingVerification',
} as const;

export enum UserRole {
  User = 'User',
  Manager = 'Manager',
}

export type UserCreateData = {
  email: string;
  password: string;
  role?: keyof typeof UserRole;
  status?: keyof typeof UserStatus;
  currentCartId?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserProps = {
  data: UserCreateData;
};

export class User {
  id: number;
  email: string;
  password: string;
  role: keyof typeof UserRole;
  status: keyof typeof UserStatus;
  cart?: Cart[];
  currentCartId?: number;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: UserProps) {
    this.id = -1;
    this.email = props.data.email;
    this.currentCartId = props.data.currentCartId;
    this.password = props.data.password;
    this.role = props.data.role;
    this.status = props.data.status;
  }

  static create(props: UserProps) {
    return new User(props);
  }
}
