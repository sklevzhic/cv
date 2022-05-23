import {RefObject} from "react";

export const useClickOutside = (ref: RefObject<HTMLElement>, handler: (e: MouseEvent) => void) => {
    console.log(ref)
    return true
}