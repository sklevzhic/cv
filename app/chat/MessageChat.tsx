import React, { memo } from 'react'
import cn from "classnames"
import {getTime} from '../utils/getTime';



interface MessageChatProps {
    text: string,
    timestamp: number,
    sender: boolean,
    last: boolean,
    name: string,
    img: string | null | undefined
}

const MessageChat: React.FC<MessageChatProps> = ({text, timestamp, sender, last, img, name}) => {
    console.log("MessageChat")
    let image: JSX.Element =  !img
        ? <div className={
            cn("absolute bottom-0 h-8 w-8 bg-lime-500 text-center pt-0.5 rounded-full cursor-pointer",
                sender ? "-right-[2.7rem]" : "-left-[2.7rem]"
            )}
        >{name[0]}</div>
        : <img className={cn("absolute bottom-0 h-8 w-8 rounded-full cursor-pointer", sender ? "-right-[2.7rem]" : "-left-[2.7rem]")}
              src={img} alt={text}
        />
    return <div className={cn("flex px-12 m-0.5", sender ? "justify-end" : " ")}>
        <div className={cn("flex relative p-1 rounded max-w-[60%] pr-10 pb-2", sender ? "bg-gray-100" : "bg-lime-100")}>
            <div>{text}
                <span
                    className={cn("absolute bottom-1 right-1 text-gray-400 text-xs")}>{getTime(timestamp)}</span>
                {
                    last &&
                    <span
                        className={cn("triangleMessage", sender ? "triangleMessageSender -right-[6px]" : " -left-[6px]") }>
                    </span>
                }

                {
                    last && image
                }
            </div>

        </div>
    </div>


};

export const MemoMessageChat = memo(MessageChat)