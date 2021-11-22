export = userAgent;
export as namespace userAgent;

declare const userAgent: UserAgent;

declare interface UserAgent {
    isBrowser: (query: string) => boolean;
    isBrowserArchitecture: (query: string) => boolean;
    isDevice: (query: string) => boolean;
    isEngine: (query: string) => boolean;
    isPlatform: (query: string) => boolean;
    isPlatformArchitecture: (query: string) => boolean;
}
