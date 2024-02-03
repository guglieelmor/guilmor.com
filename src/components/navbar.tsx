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

export default function Navbar() {
  return (
    <nav className="bg-grey">
      <div className="g-gradient h-2"></div>
      <div className="container flex">
        <div className="flex-1">
          <div className="h-auto">
            <Link className="hover:opacity-75 w-0 h-0" href="/">
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
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
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
