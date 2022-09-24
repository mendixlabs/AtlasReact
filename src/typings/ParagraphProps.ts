import { ParagraphRole } from "./ParagraphRole";

export interface ParagraphProps {
  customClass?: string | null;
  role?: ParagraphRole | null;
  children?: React.ReactNode;
}
