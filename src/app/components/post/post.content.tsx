interface PostContentProps {
    title?: string;
}

export default function postContent({title}: PostContentProps){
    return(
        <div className="flex flex-col items-center ">

        <h1 className="text-2xl font-bold max-[780px]:text-lg">{title}</h1>

        <span className="text-sm  p-3 bg-slate-900/40 rounded-b-lg rounded-lg max-[780px]:text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ex hic, iure veniam, reiciendis alias ab veritatis incidunt harum consectetur numquam, suscipit porro adipisci ipsum? Deleniti minima id labore maxime.</span>

      </div>
    )
}