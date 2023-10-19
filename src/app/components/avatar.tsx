import Image from "next/image";

export default function AvatarComponent(params: {
    avatar?: string;
    style?: string;
    width?: number;
    height?: number;

}) {
    return (
        <Image src={params.avatar || '/github.png'} alt="Avatar de usuario" className={params.style} width={params.width}
        height={params.height} />
    )
}
