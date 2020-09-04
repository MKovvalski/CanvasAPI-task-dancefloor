/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useEffect } from "react";
import useMockedApiRequest, { IMockedCanvas } from "../api/use-mocked-api-call";

interface IUseContainerOut {
    containerState: IMockedCanvas | null;
    isLoading: boolean;
    applyNewCanvasValues: (values: IMockedCanvas) => void;
}

const useStateContainer = (): IUseContainerOut => {
    const logic = useMockedApiRequest({ latency: 500 });
    const [containerState, setContainerState] = useState<IMockedCanvas | null>(null);

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

    const applyNewCanvasValues = (values: IMockedCanvas) => {
        setContainerState(values);
    };

    useEffect(() => {
        getInitialState();
    }, []);

    return { containerState, isLoading: logic.loading, applyNewCanvasValues };
};

export default useStateContainer;
