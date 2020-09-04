import React from "react";

import { IUseContainerOut } from "../logic/state-container/use-state-container";

import Form from "./form";

const FormContainer: React.FC<IUseContainerOut> = ({ isLoading, ...otherProps }) => {
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {!isLoading && otherProps.containerState && (
                <Form
                    updateCanvasValues={otherProps.applyNewCanvasValues}
                    canvasParams={otherProps.containerState}
                />
            )}
        </>
    );
};

export default FormContainer;
