export default function AvatarComponent(params: {
    avatar?: string;
    style?: string
}) {
    return (
        <img src={params.avatar} alt="Avatar de usuario" className={params.style}/>
    )
}