import React from "react";

export default function Card({ children, className }: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`card ${className}`}>
      <div className="card-body">{children}</div>
    </div>
  );
}
