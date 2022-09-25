import { HeadingSize } from "./HeadingSize";

export interface HeadingProps {
    customClass?: string | null;
    size: HeadingSize;
    children?: React.ReactNode;
}
