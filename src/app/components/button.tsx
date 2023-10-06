import Link, { LinkProps } from "next/link";

interface ButtonProps extends Omit<LinkProps, "href"> {
  Link: string;
  ContentButton: string;
  style: string;
}

export default function ButtonComponent(params: ButtonProps) {
  return (
    <Link href={params.Link} className={params.style}>
      {params.ContentButton}
    </Link>
  );
}
