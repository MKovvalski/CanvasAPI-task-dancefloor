import { useState } from "react";
import canvasAPIResponse from "./response-mocks";

export interface IMockedCanvas {
    rows: number;
    columns: number;
}

interface IUseApiMockedRequest {
    latency: number;
}

interface IUseApiMockedRequestOut {
    get: () => Promise<IMockedCanvas>;
    toggleLoading: (loadingState: boolean) => void;
    loading: boolean;
}

const useMockedApiRequest = (props: IUseApiMockedRequest): IUseApiMockedRequestOut => {
    const [loading, isLoading] = useState(true);

    const toggleLoading = (loadingState: boolean) => {
        isLoading(loadingState);
    };

    const get = (): Promise<IMockedCanvas> => {
        return new Promise((resolve) =>
            setTimeout(() => {
                resolve(canvasAPIResponse);
            }, props.latency),
        );
    };

    return { get, toggleLoading, loading };
};

export default useMockedApiRequest;
