import Link from "next/link"

export default function ButtonComponent(params: {
    Link: string,
    ContentButton: string,
    style: string
}) {
    return (
    <Link href={params.Link}
        className={params.style}>
            
        { params.ContentButton}

    </Link>
    )
}