import React, { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "ecom | home";
  }, []);

  return <>This is Home page</>;
}
