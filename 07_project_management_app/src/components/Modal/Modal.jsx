import { createPortal } from "react-dom";
import Button from "../Button/Button.jsx";

export default function Modal({ children, ref, buttonCaption }) {
  return createPortal(
    <dialog ref={ref} className="backdrop:bg-stone-900/90 p-4 rounded-md shaadow-md">{children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
