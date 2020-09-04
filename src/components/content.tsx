import React, { useEffect } from "react";

import useApiCall from "../logic/api/use-mocked-api-call";
import canvasAPIResponse from "../logic/api/response-mocks";

const Content: React.FC = () => {
    const useAPI = useApiCall({ response: canvasAPIResponse, latency: 2000 });
    useEffect(() => {
        useAPI.get();
    }, []);

    // eslint-disable-next-line no-console
    console.log(useAPI.requestState);
    return <main className="content">Welcome the Body</main>;
};

export default Content;
