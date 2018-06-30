import {LocalUserGuard, LoggedInGuard, RegisteredUserGuard} from './auth.guard';

export const guards: any[] = [
    LoggedInGuard,
    LocalUserGuard,
    RegisteredUserGuard
];

export * from './auth.guard';

