import React, { useState } from "react";

import { ICanvasParams } from "../logic/api/use-mocked-api-call";

export interface IForm {
    canvasParams: ICanvasParams;
    updateCanvasValues: (values: ICanvasParams) => void;
}

interface IFormState {
    rows: number | string;
    columns: number | string;
}

const Form: React.FC<IForm> = ({ canvasParams, updateCanvasValues }) => {
    const [newCanvasParams, setNewCanvasParams] = useState<IFormState>(canvasParams);

    const updateCanvas = () => {
        updateCanvasValues({
            rows: Number(newCanvasParams.rows),
            columns: Number(newCanvasParams.columns),
        });
    };

    const onRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rows = event.target.value;
        setNewCanvasParams((state) => ({ ...state, rows }));
    };

    const onColumnsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const columns = event.target.value;
        setNewCanvasParams((state) => ({ ...state, columns }));
    };

    return (
        <div className="form">
            <div className="form__title">Choose your parameters</div>
            <input
                className="form__input"
                value={newCanvasParams.rows}
                onChange={onRowsChange}
                placeholder="ows"
            />
            <input
                className="form__input"
                value={newCanvasParams.columns}
                onChange={onColumnsChange}
                placeholder="columns"
            />
            <button className="form__button" onClick={updateCanvas}>
                Apply
            </button>
        </div>
    );
};

export default Form;
