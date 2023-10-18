import Image from "next/image";

export default function AvatarComponent(params: {
    avatar?: string;
    style?: string;
}) {
    return (
        <Image src={params.avatar || '/github.png'} alt="Avatar de usuario" className={params.style} />
    )
}
