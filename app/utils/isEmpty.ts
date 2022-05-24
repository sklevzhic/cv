export function isEmpty(str: string) {
    return (!str || /^\s*$/.test(str));
}