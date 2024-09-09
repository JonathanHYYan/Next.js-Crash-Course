import Link from "next/link";
import React from "react";

// Local not-found.jsx override will not work unless the pages dynamicParams
// is set to true.
export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="txt-3xl">There was a problem.</h2>
      <p>We could not find the ticket you were looking for.</p>
      <p>
        Go back to the <Link href="/tickets">Tickets</Link>
      </p>
    </main>
  );
}
