import SeePost from "../SeePost";

interface PostContentProps {
  content?: string;
  openSeePost?: boolean;
}

export default function postContent({ content, openSeePost }: PostContentProps) {


  return (
    <div className="flex  flex-col mt-4">
      <span className="text-sm text-[#ADB5BD] p-4 bg-slate-900/40 rounded-b-lg rounded-lg max-[780px]:text-xs ">
        
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ex
        hic, iure veniam, reiciendis alias ab veritatis incidunt harum
        consectetur numquam, suscipit porro adipisci ipsum? Deleniti minima id
        labore maxime.


        <SeePost seeMore={openSeePost}/>

      </span>
    </div>
  );
}
