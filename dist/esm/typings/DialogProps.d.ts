/// <reference types="react" />
export interface DialogProps {
    customClass?: string | null;
    title: string;
    closeHandler: () => void;
    children?: React.ReactNode;
}
