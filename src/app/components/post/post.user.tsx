interface UserProps {
    name?: string;
    time?: string;
}

export default function postUser( {name, time}: UserProps) {
    return(
        <div className="flex flex-col gap-1">
          <span className="text-[15px] font-bold text-[#DEE2E6]">{name}</span>
          <span className="transform -translate-y-2 text-[#6C757D] text-[14px]">{time}</span>
        </div>
    )
}