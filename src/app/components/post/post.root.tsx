import { ReactNode } from "react";

interface postRootprops {
  children: ReactNode;
}

export default function postRoot({ children }: postRootprops) {
  return(

    <div className="flex items-center flex-col w-full gap-1 max-[780px]:h-60 px-4 py-2  text-black border border-black/30 rounded-3xl mb-2 bg-[#9b9b9ba2] mt-2">

    {children}

    </div>

  )
}
