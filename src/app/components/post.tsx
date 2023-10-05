import AvatarComponent from "./avatar";
import ButtonComponent from "./button";

export default function PostComponent(params: {
  avatar?: string;
  title?: string;
  name?: string;
  subname?: string;
  post?: string;
}) {
  return (
    <div className="flex items-center flex-col w-full h-48 max-[780px]:h-60 px-4 py-2 text-black border border-black/30 rounded-3xl mb-2">
      <div className="flex flex-wrap gap-3 w-full h-14 ">
        <AvatarComponent avatar="http://github.com/cauesilva1.png" style="w-12 h-12 rounded-full"/>

        <div className="flex flex-col">
          <span className="text-lg font-bold">{params.name}</span>
          <span className="transform -translate-y-2">{params.subname}</span>
        </div>
      </div>

      <div className="flex flex-col items-center ">

        <h1 className="text-2xl font-bold max-[780px]:text-lg">{params.title}</h1>

        <span className="text-sm  p-3 bg-slate-900/40 rounded-b-lg rounded-lg max-[780px]:text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ex hic, iure veniam, reiciendis alias ab veritatis incidunt harum consectetur numquam, suscipit porro adipisci ipsum? Deleniti minima id labore maxime.</span>

      </div>

      <ButtonComponent ContentButton="Read" Link="#" style="bg-[#656565] hover:bg-[#3a3a3a] transition-colors duration-250 px-4 rounded-lg mt-2"/>

    </div>
  );
}
