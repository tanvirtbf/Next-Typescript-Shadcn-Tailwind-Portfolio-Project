"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import FirstImage from '../../public/1.jpg'
import SecondImage from '../../public/2.jpg'
import ThirdImage from '../../public/3.jpg'
import FourthImage from '../../public/4.jpg'

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Image">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="/"
                src={FirstImage}
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="/"
                src={SecondImage}
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="/"
                src={ThirdImage}
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="/"
                src={FourthImage}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="My Project">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Vanilla CSS</HoveredLink>
              <HoveredLink href="/interface-design">
                Vanilla Javascript
              </HoveredLink>
              <HoveredLink href="/seo">React</HoveredLink>
              <HoveredLink href="/branding">Next.js</HoveredLink>
              <HoveredLink href="/branding">Redux</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
