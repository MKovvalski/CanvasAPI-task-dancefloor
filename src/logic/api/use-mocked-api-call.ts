import { useState } from "react";

interface IUseApiMockedRequest {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    response: any;
    latency: number;
}

interface IRequestState {
    isLoading: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    responseData: any;
}

interface IUseApiMockedRequestOut {
    get: () => void;
    requestState: IRequestState;
}

const useMockedApiRequest = (props: IUseApiMockedRequest): IUseApiMockedRequestOut => {
    const [requestState, setRequestState] = useState<IRequestState>({ isLoading: false, responseData: null });

    const setLoading = (isLoading: boolean) => setRequestState((state) => ({ ...state, isLoading }));

    const get = async () => {
        setLoading(true);

        try {
            const response = await new Promise((resolve) =>
                setTimeout(() => {
                    resolve(props.response);
                }, props.latency),
            ).then((value) => value);

            setRequestState({
                isLoading: false,
                responseData: response,
            });
        } catch {
            // mock will not be returning errors
        }
    };

    return { get, requestState };
};

export default useMockedApiRequest;
