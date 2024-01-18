"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";

interface Props {
  navItems: any[];
  deviceType?: string;
}

const NavList = ({ navItems, deviceType = "" }: Props) => {
  const pathname = usePathname();
  console.log(pathname);
  return navItems.map((item) => (
    <Link
      key={item.name}
      href={item.url}
      className={`
        ${pathname === item.url ? styles.active : ""} ${styles[deviceType]} ${
        styles.navbarItem
      }
      `}
    >
      {item.name}
    </Link>
  ));
};

export default NavList;
