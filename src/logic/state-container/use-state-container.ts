import { useState, useEffect } from "react";
import useMockedApiRequest, { ICanvasParams } from "../api/use-mocked-api-call";

export interface IUseContainerOut {
    containerState: ICanvasParams | null;
    isLoading: boolean;
    applyNewCanvasValues: (values: ICanvasParams) => void;
}

const useStateContainer = (): IUseContainerOut => {
    const logic = useMockedApiRequest({ latency: 1000 });
    const [containerState, setContainerState] = useState<ICanvasParams | null>(null);

    const getInitialState = async () => {
        logic.toggleLoading(true);
        try {
            const initialState = await logic.get();

            setContainerState(initialState);
            logic.toggleLoading(false);
        } catch {
            // no error handling for now
        }
    };

    const applyNewCanvasValues = (values: ICanvasParams) => {
        setContainerState(values);
    };

    useEffect(() => {
        getInitialState();
    }, []);

    return { containerState, isLoading: logic.loading, applyNewCanvasValues };
};

export default useStateContainer;
