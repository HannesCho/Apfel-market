"use client";

import { useState } from "react";

export default function DarkBtn() {
  const [theme, setTheme] = useState("");
  const onClickHandler = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  return (
    <div className="absolute top-0 right-0 text-white">
      {theme === "dark" ? (
        <button onClick={onClickHandler}>🌙</button>
      ) : (
        <button onClick={onClickHandler}>🌞</button>
      )}
    </div>
  );
}
