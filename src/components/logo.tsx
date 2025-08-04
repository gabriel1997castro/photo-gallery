import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image alt="Logo CI" src="/logo.svg" width={75} height={75} />
    </Link>
  );
};
