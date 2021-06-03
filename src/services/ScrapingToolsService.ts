import axios from 'axios';
import { ScrapingResultModel } from '../models/ScrapingResultModel';

export class ScrapingToolsService {
    private readonly baseURL: string;

    constructor() {
        this.baseURL = "https://web-scraping-tools.herokuapp.com"
    }

    public async getChainCollections() : Promise<string[]> {
        var response = await axios.get(`${this.baseURL}/chain_collections/Mobile`);
        return response.status == 200 ? response.data.actionChains : [];
    }

    public async exec(base_url: string, template: string): Promise<ScrapingResultModel> {
        var parameters = {
            base_url,
            template
        };

        var response = await axios.post(`${this.baseURL}/exec`, parameters)
        return response.data;
    }
}