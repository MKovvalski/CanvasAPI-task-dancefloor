import React from "react";

import CanvasRenderer from "./canvas-renderer";
import Loader from "./loader";

import { ICanvasParams } from "../logic/api/use-mocked-api-call";

export interface ICanvasContainer {
    canvasParams: ICanvasParams | null;
    isLoading: boolean;
}

const CanvasContainer: React.FC<ICanvasContainer> = ({ isLoading, canvasParams }) => {
    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && canvasParams && <CanvasRenderer {...canvasParams} />}
        </>
    );
};

export default CanvasContainer;
