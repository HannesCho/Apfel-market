import Link from "next/link";
import { IconType } from "react-icons";

interface SnsButtonProps {
  locale: string;
  href: string;
  Icon: IconType;
  text: string;
}

export default function SnsButton({
  locale,
  href,
  Icon,
  text,
}: SnsButtonProps) {
  return (
    <Link
      href={`/${locale}${href}`}
      className="flex flex-row items-center justify-center gap-2 text-white primary-btn"
    >
      <span>
        <Icon className="size-6" />
      </span>
      <span>{text}</span>
    </Link>
  );
}
