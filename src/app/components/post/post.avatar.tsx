import AvatarComponent from "../avatar";

interface AvatarProps {
    avatar?: string;
}

export default function postAvatar( {avatar}: AvatarProps) {
    return(
 
            
        <AvatarComponent avatar={avatar} style="w-[40px] h-[40px] rounded-full"/>

        

    )
}