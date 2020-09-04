import React from "react";

import useStateContainer from "../logic/state-container/use-state-container";

import CanvasContainer from "./canvas-container";

const Content: React.FC = () => {
    const logic = useStateContainer();

    return (
        <main className="content">
            <CanvasContainer isLoading={logic.isLoading} canvasParams={logic.containerState} />
        </main>
    );
};

export default Content;
