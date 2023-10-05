import Link from "next/link"

export default function ButtonComponent(params: {
    Link: string,
    ContentButton: string,
}) {
    return (
    <button
    className="bg-[#656565] hover:bg-[#3a3a3a] transition-colors duration-250 py-2 px-10 rounded-lg">
        <Link href={params.Link}>
        { params.ContentButton}
        </Link>

    </button>
    )
}