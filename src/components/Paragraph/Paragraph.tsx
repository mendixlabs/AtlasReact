import classNames from "classnames";
import React, { ReactElement } from "react";
import { ParagraphProps } from "../../typings/ParagraphProps";
import { ParagraphRole } from "../../typings/ParagraphRole";

const Paragraph = ({ customClass, role, children }: ParagraphProps): ReactElement => (
    <p className={classNames("mx-text", role === ParagraphRole.detail && "text-detail", customClass && customClass)}>
        {children}
    </p>
);

export default Paragraph;
