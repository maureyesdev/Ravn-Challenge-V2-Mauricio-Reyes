// TODO: this might be object literals
export enum UserStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  PendingVerification = 'PendingVerification',
}

// TODO: this might be object literals
export enum UserRole {
  User = 'User',
  Manager = 'Manager',
}

export type UserCreateData = {
  email: string;
  password: string;
  role?: keyof typeof UserRole;
  status?: keyof typeof UserStatus;
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
  createdAt?: Date;
  updatedAt?: Date;

  private constructor(props: UserProps) {
    this.id = -1;
    this.email = props.data.email;
    this.password = props.data.password;
    this.role = props.data.role;
    this.status = props.data.status;
  }

  static create(props: UserProps) {
    return new User(props);
  }
}
