import { get } from "http";

export function getKeyName(...args: string[]) {
    return `valura:${args.join(':')}`;
}

export const userCache = (key: string) => getKeyName('user', key);