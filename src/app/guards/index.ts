import {AuthGuard, LocalUserGuard, LoggedInGuard, RegisteredGuard, RegisteredUserGuard} from './auth.guard';

export const guards: any[] = [
  LoggedInGuard,
  LocalUserGuard,
  RegisteredUserGuard,
  RegisteredGuard,
  AuthGuard
];

export * from './auth.guard';

