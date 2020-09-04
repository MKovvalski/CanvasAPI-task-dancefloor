import React from "react";

import { IUseContainerOut } from "../logic/state-container/use-state-container";
import Loader from "./loader";

import Form from "./form";

const FormContainer: React.FC<IUseContainerOut> = ({ isLoading, ...otherProps }) => {
    return (
        <>
            {isLoading && <Loader />}
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
