import { AuthGuard } from "@nestjs/passport";

export class jwtauthGuard extends AuthGuard("jwt"){}