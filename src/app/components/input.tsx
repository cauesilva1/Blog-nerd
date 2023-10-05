export default function InputComponent(params: {
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    className: string,
    type: string
}
) {
    return (
        <input
            type={params.type}
            className={params.className}
            placeholder={params.placeholder}
            onChange={params.onChange}
        />
    )
}