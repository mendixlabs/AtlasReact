import { FormOrientation } from "./FormOrientation";

export interface FormProps {
    orientation: FormOrientation;
    customClass?: string | null;
    // children?: React.ReactNode;
    content?: React.ReactNode;
    controls?: React.ReactNode;
}
