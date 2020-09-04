import { IMockedCanvas } from "../logic/api/use-mocked-api-call";

export interface ISharedContainerProps {
    canvasParams: IMockedCanvas | null;
    isLoading: boolean;
}
