import React, { ReactElement } from "react";
import classNames from "classnames";
import { DialogProps } from "../../typings/DialogProps";

import "./Dialog.css";
import DialogCloseButton from "./DialogCloseButton/DialogCloseButton";

const Dialog = ({
    customClass,
    title,
    closeHandler,
    children,
    showHeader = true
}: DialogProps): ReactElement => {
    return (
        <div className="modal-dialog-wrapper">
            <div
                role="dialog"
                className={classNames("modal-dialog mx-window mx-window-active", customClass && customClass)}
                aria-modal="true"
                data-focus-capturing="modal"
            >
                <div className="modal-content mx-window-content">
                    {showHeader === false ? (
                        <DialogCloseButton showHeader={showHeader} closeHandler={closeHandler} />
                    ) : (
                        <div className="modal-header mx-window-header">
                            <DialogCloseButton showHeader={showHeader} closeHandler={closeHandler} />
                            <h4 className="modal-title">{title}</h4>
                        </div>
                    )}
                    <div data-focusindex="0" className="modal-body mx-window-body">
                        <div className="mx-scrollcontainer mx-scrollcontainer-horizontal mx-scrollcontainer-fixed">
                            <div className="mx-scrollcontainer-center">
                                <div className="mx-scrollcontainer-wrapper">
                                    <div className="mx-placeholder">
                                        <div className="mx-layoutgrid mx-layoutgrid-fluid container-fluid">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-12">{children}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
