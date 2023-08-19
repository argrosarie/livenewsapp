"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  category: string;
  isActive: boolean;
};
export default function NavLink({ category, isActive }: Props) {
  const pathname = usePathname();
  //   const isActive = (path:string) => {
  //    // return pathname?.split
  //   }
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}
