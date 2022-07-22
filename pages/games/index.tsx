import { Popover } from "@headlessui/react";
import { useState } from "react";


function GamesPage() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>

        <Popover className="relative">
            <Popover.Button>Solutions</Popover.Button>

            <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-2">
                    <a href="/analytics">Analytics</a>
                    <a href="/engagement">Engagement</a>
                    <a href="/security">Security</a>
                    <a href="/integrations">Integrations</a>
                </div>

                <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
        </Popover>
    </>
}

export default GamesPage
