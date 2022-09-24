import { ButtonSize } from "./ButtonSize";
import { ButtonVariant } from "./ButtonVariant";
import { SyntheticEvent } from "./SyntheticEvent";

export interface ButtonProps {
  callback?: SyntheticEvent;
  customClass?: string | null;
  icon?: string | null;
  size?: ButtonSize | null;
  label?: string | null;
  variant?: ButtonVariant | null;
  outlined?: boolean | null;
  fullwidth?: boolean | null;
  disabled?: boolean | null;
}
