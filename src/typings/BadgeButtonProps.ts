import { ButtonSize } from "./ButtonSize";
import { ButtonVariant } from "./ButtonVariant";
import { SyntheticEvent } from "./SyntheticEvent";

export interface BadgeButtonProps {
    label: string;
    badgeLabel: string;
    onClick?: SyntheticEvent;
    customClass?: string | null;
    size?: ButtonSize | null;
    variant?: ButtonVariant | null;
    outlined?: boolean | null;
    fullwidth?: boolean | null;
    disabled?: boolean | null;
}
