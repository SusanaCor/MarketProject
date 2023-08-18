import React, { useContext } from "react";
import { FormContext } from "../context/Context";

export function Header() {
  const { usuario } = useContext(FormContext);

  return (
    <>
      <p>{usuario}</p>
    </>
  );
}
