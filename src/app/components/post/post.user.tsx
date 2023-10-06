interface UserProps {
    name?: string;
    subname?: string;
}

export default function postUser( {name, subname}: UserProps) {
    return(
        <div className="flex flex-col">
          <span className="text-lg font-bold">{name}</span>
          <span className="transform -translate-y-2">{subname}</span>
        </div>
    )
}