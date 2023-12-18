// * Currently not used. JWT is handled by nestjs/jwt
export abstract class JwtService {
  abstract sign(payload: any): Promise<string>;
  abstract verify(token: string): any;
}
