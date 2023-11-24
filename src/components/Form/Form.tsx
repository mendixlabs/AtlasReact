import React, { ReactElement, ReactNode } from "react";
import classNames from "classnames";
import { FormProps } from "../../typings/FormProps";

import "./Form.css";

const Content = ({content}: {content: ReactNode}): ReactElement => (
    <div className="mx-dataview-content">
        {content}
    </div>
);

const Controls = ({controls}: {controls: ReactNode}): ReactElement => (
    <div className="mx-dataview-controls">
        {controls}
    </div>
);

const Form = ({
    orientation,
    customClass,
    // children,
    content,
    controls
}: FormProps): ReactElement => {
    const className = classNames(
        "mx-dataview",
        `form-${orientation}`,
        customClass && customClass
    );

    return (
        <div className={className}>
            <Content content={content} />
            <Controls controls={controls} />
        </div>                  
    );
};

export default Form;
