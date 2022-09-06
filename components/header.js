import React from "react";

export default function Header({ ...restProps }) {
  return (
    <header {...restProps}>
      <div className="container">Im a header</div>
    </header>
  );
}
