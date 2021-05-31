import { ActionChainModel } from "../../models/ActionChainModel";

export type ActionChainListNavParams = {
    ActionChainList: undefined,
    ScrapingAction: {
        actionChain: ActionChainModel
        baseURL?: string
    }
}