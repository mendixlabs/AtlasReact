import { ReactElement } from "react";
import { ButtonProps } from "../../typings/ButtonProps";
import "./Button.css";
declare const Button: ({ callback, customClass, icon, size, label, variant, outlined, fullwidth, disabled }: ButtonProps) => ReactElement;
export default Button;
