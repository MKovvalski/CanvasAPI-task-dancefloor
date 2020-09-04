import React from "react";

import CanvasRenderer from "./canvas-renderer";
import Loader from "./loader";

import { ISharedContainerProps } from "./types";

const CanvasContainer: React.FC<ISharedContainerProps> = ({ isLoading, canvasParams }) => {
    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && canvasParams && <CanvasRenderer {...canvasParams} />}
        </>
    );
};

export default CanvasContainer;
