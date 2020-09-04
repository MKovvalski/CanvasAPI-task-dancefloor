import React from "react";

import CanvasRenderer from "./canvas-renderer";

import { ISharedContainerProps } from "./types";

const CanvasContainer: React.FC<ISharedContainerProps> = ({ isLoading, canvasParams }) => {
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {!isLoading && canvasParams && <CanvasRenderer {...canvasParams} />}
        </>
    );
};

export default CanvasContainer;
