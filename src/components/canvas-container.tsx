import React from "react";

import CanvasRenderer from "./canvas-renderer";

import { IMockedCanvas } from "../logic/api/use-mocked-api-call";

interface ICanvasContainer {
    canvasParams: IMockedCanvas | null;
    isLoading: boolean;
}

const CanvasContainer: React.FC<ICanvasContainer> = ({ isLoading, canvasParams }) => {
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && canvasParams && <CanvasRenderer {...canvasParams} />}
        </div>
    );
};

export default CanvasContainer;
