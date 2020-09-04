import React, { useState, useRef, useEffect } from "react";

import { IMockedCanvas } from "../logic/api/use-mocked-api-call";

const CanvasRenderer: React.FC<IMockedCanvas> = ({ rows, columns }) => {
    const [canvasSizing, setCanvasSizing] = useState({ width: 500, height: 500 });
    const parentRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const calculateSquareSize = (parentWidth: number) => parentWidth / columns;

    const paintCanvas = () => {
        if (canvasRef.current && parentRef.current) {
            const canvasContext = canvasRef.current.getContext("2d");
            const parentWidth = parentRef.current.clientWidth;

            const squareSize = calculateSquareSize(parentWidth);
            // somRef.current = 2000;

            if (canvasContext) {
                // eslint-disable-next-line no-console
                console.log(rows, columns, squareSize);
                for (let x = 0; x < rows; x++) {
                    for (let y = 0; y < columns; y++) {
                        canvasContext.fillStyle = `rgb(${Math.floor(255 - 42.5 * x)}, ${Math.floor(
                            255 - 42.5 * y,
                        )}, 0)`;
                        canvasContext.fillRect(y * squareSize, x * squareSize, squareSize, squareSize);
                    }
                }
            }
        }
    };

    const calculateCanvasSizing = () => {
        if (parentRef.current) {
            const parentWidth = parentRef.current.clientWidth;
            const squareSize = calculateSquareSize(parentWidth);
            const height = squareSize * rows;

            setCanvasSizing({ width: parentWidth, height });
        }
    };

    useEffect(() => {
        calculateCanvasSizing();
    }, [rows, columns]);

    useEffect(() => {
        paintCanvas();
    }, [canvasRef.current]);

    return (
        <div ref={parentRef} style={{ height: canvasSizing.height }}>
            <canvas ref={canvasRef} width={canvasSizing.width} height={canvasSizing.height} />
        </div>
    );
};

export default CanvasRenderer;
