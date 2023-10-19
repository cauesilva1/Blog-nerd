import AvatarComponent from "../avatar";

interface AvatarProps {
    avatar?: string;
}

export default function postAvatar( {avatar}: AvatarProps) {
    return(
 
            
        <AvatarComponent avatar={avatar} height={40} width={40} style="w-[40px] h-[40px] rounded-full"/>

        

    )
}