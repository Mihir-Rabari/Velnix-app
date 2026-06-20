import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export default function BrandLogo({
  className = "",
  imageClassName = "h-7 w-auto",
  priority = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="The Velnix home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/velnix-mark.png"
        alt="The Velnix"
        width={1206}
        height={979}
        priority={priority}
        className={`shrink-0 object-contain ${imageClassName}`}
      />
    </Link>
  );
}
