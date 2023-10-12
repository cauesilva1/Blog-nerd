import SeePost from "../SeePost";

interface PostContentProps {
  content?: string;
  openSeePost?: boolean;
  contentSeeMore?: string;
  title?: string;
  name?: string
}

export default function postContent({ content, openSeePost, contentSeeMore, title, name }: PostContentProps) {

  return (
    <div className="flex  flex-col mt-4">
      <span className="text-sm text-[#ADB5BD] p-4 bg-slate-900/40 rounded-b-lg rounded-lg max-[780px]:text-xs ">
        
        {content}

        <SeePost seeMore={openSeePost} content={contentSeeMore} title={title} name={name} />

      </span>
    </div>
  );
}
