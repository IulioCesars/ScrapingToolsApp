import { ActionChainModel } from "./ActionChainModel";

export interface ScrapingTask {
    idScrapingTask?: number;
    taskName: string;
    baseURL: string;
    template: string;
}