"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="bg-grey">
      <div className="g-gradient h-2"></div>
      <div className="container flex">
        <div className="flex-1">
          <div className="flex">
            <Link className="hover:opacity-75 h-auto" href="/">
              <Image
                src="/assets/logotipo/logo.png"
                alt="GUILMOR: Soluções em Tecnologia da Informação"
                width={72}
                height={72}
                property="true"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="m-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Abrir menu</span>
              <CiMenuFries size={20} className="m-auto text-white" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/sobre">
                <Button
                  className="text-2xl hover:text-white text-grey100"
                  variant="link"
                >
                  sobre
                </Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/contato">
                <Button
                  className="text-2xl hover:text-white text-grey100"
                  variant="link"
                >
                  contato
                </Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex-1 m-auto hidden w-full md:block md:w-auto">
          <div className="flex justify-end">
            <Link href="/sobre">
              <Button
                className="text-2xl hover:text-white text-grey100"
                variant="link"
              >
                sobre
              </Button>
            </Link>
            <Link href="/contato">
              <Button
                className="text-2xl hover:text-white text-grey100"
                variant="link"
              >
                contato
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
