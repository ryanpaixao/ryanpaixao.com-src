import Link from "next/link";

type LinkProps = {
  href: string;
  children: string | React.ReactNode;
};

export default function ExtLink({
  href,
  children
}: LinkProps){
  return (
    <Link
      href={href}
      className="text-green-400"
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </Link>
  )
};
