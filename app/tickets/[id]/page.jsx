import { notFound } from "next/navigation";
import React from "react";

export const dynamicParams = true;

// This functions job to generate a page and route in cache for each possible extension urls
export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets/');

  const tickets = await res.json();

  return tickets.map((ticket)=> ({id:ticket.id}));
}

async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60, // use 0 to not cache data and have it refresh every time
    },
  });

  if(!res.ok){
    notFound();
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>
  );
}
