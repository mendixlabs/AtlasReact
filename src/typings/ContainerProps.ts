import { ContainerAlignment } from "./ContainerAlignment";

export interface ContainerProps {
    alignment?: ContainerAlignment;
    border?: boolean;
    children?: React.ReactNode;
}
