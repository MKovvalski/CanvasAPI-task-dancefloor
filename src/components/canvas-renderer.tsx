import React, { useState, useRef, useEffect } from "react";

import { ICanvasParams } from "../logic/api/use-mocked-api-call";

interface ICanvasState {
    width: number;
    height: number;
}

const CanvasRenderer: React.FC<ICanvasParams> = ({ rows, columns }) => {
    const [resizeTrigger, setResizeTrigger] = useState(false);
    const [canvasSizing, setCanvasSizing] = useState<ICanvasState>({ width: 0, height: 0 });
    const parentRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const hasSizing = !!canvasSizing.width && !!canvasSizing.height;

    const calculateSquareSize = (parentWidth: number) => parentWidth / columns;

    const paintCanvas = () => {
        if (canvasRef.current) {
            const canvasContext = canvasRef.current.getContext("2d");
            const squareSize = calculateSquareSize(canvasSizing.width);

            if (canvasContext) {
                for (let x = 0; x < rows; x++) {
                    for (let y = 0; y < columns; y++) {
                        canvasContext.fillStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                        canvasContext.fillRect(y * squareSize, x * squareSize, squareSize, squareSize);
                    }
                }
            }
        }
    };

    const calculateCanvasSizing = () => {
        if (parentRef.current) {
            const width = parentRef.current.clientWidth;
            const squareSize = calculateSquareSize(width);
            const height = squareSize * rows;

            setCanvasSizing({ width, height });
        }
    };

    const triggerCanvasResize = () => {
        let timer: NodeJS.Timeout | null;
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                timer = null;
                setResizeTrigger(true);
            }, 500);
        };
    };

    useEffect(() => {
        calculateCanvasSizing();
    }, [rows, columns]);

    useEffect(() => {
        paintCanvas();
    }, [canvasSizing.width, canvasSizing.height]);

    useEffect(() => {
        const resizeEvent = triggerCanvasResize();
        window.addEventListener("resize", resizeEvent);
        return () => {
            window.removeEventListener("resize", resizeEvent);
        };
    }, []);

    useEffect(() => {
        if (resizeTrigger) {
            calculateCanvasSizing();
            setResizeTrigger(false);
        }
    }, [resizeTrigger]);

    return (
        <div ref={parentRef} style={{ height: canvasSizing.height }}>
            {hasSizing && <canvas ref={canvasRef} width={canvasSizing.width} height={canvasSizing.height} />}
        </div>
    );
};

export default CanvasRenderer;
