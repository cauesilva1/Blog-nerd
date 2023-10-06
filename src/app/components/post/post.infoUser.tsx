import { ReactNode } from "react";

interface PostInfoUserProps {
    children: ReactNode;
}

export default function PostInfoUser({ children }: PostInfoUserProps) {
    return(
        <div className="flex flex-wrap gap-3 w-full h-14 ">
            {children}
        </div>

    )
}