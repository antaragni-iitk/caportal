import { LocalUserGuard, LoggedInGuard } from './auth.guard';

export const guards: any[] = [
    LoggedInGuard,
    LocalUserGuard
];

export * from './auth.guard';

