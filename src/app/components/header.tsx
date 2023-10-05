import Link from "next/link";
import AvatarComponent from "./avatar";
import ButtonComponent from "./button";

export default function Header(params: { logo?: string; user?: string, avatar?: string }) {
  return (
    <div className="flex items-center justify-between w-full h-14 bg-[#272727] px-4 py-2">
      <p>{params.logo}</p>

      <Link href="/Profile" className="flex items-center justify-center gap-2">
        <p>{params.user}</p>
        {params.avatar && <AvatarComponent avatar={params.avatar} style="w-12 h-12 rounded-full "/>}
      </Link >
    </div>
  );
}
