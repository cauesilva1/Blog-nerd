export default function AvatarComponent(params: {
    avatar?: string;
}) {
    return (
        <img src={params.avatar} alt="Avatar de usuario" className=" w-12 h-12 rounded-full "/>
    )
}