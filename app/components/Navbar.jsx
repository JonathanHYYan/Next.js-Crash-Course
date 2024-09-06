import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./dogs.jpg"

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Helpdesk logo'
        width={70}
        placeholder="blur"
      />
      <h1>Help Desk</h1>
      <Link href="/">Dashbobard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
