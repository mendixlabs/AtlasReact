import { ButtonSize } from "./ButtonSize";
import { ButtonVariant } from "./ButtonVariant";
import { SyntheticEvent } from "./SyntheticEvent";

export interface ButtonProps {
  onClick?: SyntheticEvent;
  customClass?: string | null;
  size?: ButtonSize | null;
  children?: React.ReactNode;
  variant?: ButtonVariant | null;
  outlined?: boolean | null;
  fullwidth?: boolean | null;
  disabled?: boolean | null;
}
