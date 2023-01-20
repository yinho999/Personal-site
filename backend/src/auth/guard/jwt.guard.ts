import { AuthGuard } from '@nestjs/passport';

class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
  //   canActivate(context: ExecutionContext) {
  //     // Add your custom authentication logic here
  //     // for example, call super.logIn(request) to establish a session.
  //     return super.canActivate(context);
  //   }

  //   handleRequest(err, user, info) {
  //     // You can throw an exception based on either "info" or "err" arguments
  //     if (err || !user) {
  //       throw err || new UnauthorizedException();
  //     }
  //     return user;
  //   }
}

export { JwtGuard };
