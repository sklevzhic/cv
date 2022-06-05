export function getOtherEmail(users: string[], currentUser: string) {
    return users.filter(el => el !== currentUser)[0]
}