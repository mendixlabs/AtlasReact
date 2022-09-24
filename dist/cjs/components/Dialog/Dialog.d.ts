import { ReactElement } from "react";
import { DialogProps } from "../../typings/DialogProps";
import "./Dialog.css";
declare const Dialog: ({ customClass, title, closeHandler, children }: DialogProps) => ReactElement;
export default Dialog;
