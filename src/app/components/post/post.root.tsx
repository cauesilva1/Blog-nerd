import { ReactNode } from "react";

interface postRootprops {
  children: ReactNode;
}

export default function postRoot({ children }: postRootprops) {
  return(

    <div className="flex justify-start items-start flex-col gap-1 w-[50%] max-[780px]:w-[80%] m-auto  px-4 py-4  text-black border border-black/30 rounded-3xl mb-2 bg-[#1B1E21] mt- line-clamp-1">

    {children}

    </div>

  )
}
