import Link from "next/link";
import AvatarComponent from "./avatar";

export default function Header(params: { logo?: string; user?: string, avatar?: string }) {
  return (
    <div className="flex items-center justify-between w-full h-14 bg-[#212529] px-28 py-4">
      <p>{params.logo}</p>

      <Link href="/Profile" className="flex items-center justify-center gap-4">
        <p>{params.user}</p>
        {params.avatar && <AvatarComponent avatar={params.avatar} width={36} height={36} style=" rounded-full "/>}
      </Link >
    </div>
  );
}
