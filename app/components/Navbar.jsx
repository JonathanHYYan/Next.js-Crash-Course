import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Help Desk</h1>
      <Link href="/">Dashbobard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
