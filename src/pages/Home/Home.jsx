import React, { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.title = "ecom | home";
  }, []);

  return <>This is Home page</>;
}
