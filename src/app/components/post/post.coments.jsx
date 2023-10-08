import InputComponent from "../input";

export default function PostComent( ) {


  return (
    <div className="flex  flex-col mt-4">
        <p className="text-10 font-bold text-white justify-start">Comment:</p>
        <textarea placeholder="write your comment..." className=" h-16 min-h-[64px]  max-h-16 p-2 rounded-lg bg-[#707070] border-black border"/>
    </div>
  );
}
