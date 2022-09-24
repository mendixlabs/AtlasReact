/// <reference types="react" />
import { ReactElement } from 'react';

declare enum ButtonSize {
    small = "sm",
    large = "lg"
}

declare enum ButtonVariant {
    primary = "primary",
    secondary = "secondary",
    success = "success",
    warning = "warning",
    danger = "danger"
}

declare type SyntheticEvent = any;

interface ButtonProps {
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

declare const Button: ({ callback, customClass, icon, size, label, variant, outlined, fullwidth, disabled }: ButtonProps) => ReactElement;

interface DialogProps {
    customClass?: string | null;
    title: string;
    closeHandler: () => void;
    children?: React.ReactNode;
}

declare const Dialog: ({ customClass, title, closeHandler, children }: DialogProps) => ReactElement;

declare enum HeadingSize {
    xs = 0,
    sm = 1,
    md = 2,
    lg = 3,
    xl = 4,
    xxl = 5
}

interface HeadingProps {
    customClass?: string | null;
    size: HeadingSize;
    headingText: string;
}

declare const Heading: ({ customClass, size, headingText }: HeadingProps) => ReactElement;

declare enum ParagraphRole {
    default = 0,
    detail = 1
}

interface ParagraphProps {
    customClass?: string | null;
    role?: ParagraphRole | null;
    children?: React.ReactNode;
}

declare const Paragraph: ({ customClass, role, children }: ParagraphProps) => ReactElement;

declare const _default: {
    ButtonSize: typeof ButtonSize;
    ButtonVariant: typeof ButtonVariant;
    HeadingSize: typeof HeadingSize;
    ParagraphRole: typeof ParagraphRole;
};

/**
 * // TODO
 * These exports should be refactored in order to make the imports consuming this library be able to import
 * components and types as following:
 *
 * import { Dialog, Button, Heading, Input, ParagraphRole, ButtonVariant, etc }
 *
 * or alternatively
 *
 * import Atlas, { ParagraphRole, ButtonVariant, OtherTypes }
 */

declare const AtlasReact_Button: typeof Button;
declare const AtlasReact_Dialog: typeof Dialog;
declare const AtlasReact_Heading: typeof Heading;
declare const AtlasReact_Paragraph: typeof Paragraph;
declare namespace AtlasReact {
  export {
    _default as AtlasTypes,
    AtlasReact_Button as Button,
    AtlasReact_Dialog as Dialog,
    AtlasReact_Heading as Heading,
    AtlasReact_Paragraph as Paragraph,
  };
}

export { AtlasReact as default };
