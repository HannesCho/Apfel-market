import Link from "next/link";
import { IconType } from "react-icons";

interface SnsButtonProps {
  href: string;
  Icon: IconType;
  text: string;
}

export default function SnsButton({ href, Icon, text }: SnsButtonProps) {
  return (
    <Link
      href={href}
      className="flex flex-row items-center justify-center gap-2 text-white primary-btn"
    >
      <span>
        <Icon className="size-6" />
      </span>
      <span>{text}</span>
    </Link>
  );
}
