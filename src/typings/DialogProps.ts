export interface DialogProps {
  customClass?: string | null;
  title?: string | null;
  closeHandler: () => void;
  children?: React.ReactNode;
  showHeader?: boolean;
}
