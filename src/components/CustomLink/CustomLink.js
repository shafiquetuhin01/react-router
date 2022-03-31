import React from "react";
import { Link, useMatch, useResolvedPath } from "rct-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "red" : "black",
          textDecoration: match ? "underline" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match}
    </div>
  );
}

export default CustomLink;
