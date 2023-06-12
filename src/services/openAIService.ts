import { createHttpError } from 'express-zod-api';
import 'dotenv/config';
import { Configuration, OpenAIApi } from 'openai';

class OpenAiService {
    private readonly configuration;

    constructor() {
        this.configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    private getOpenAI(): OpenAIApi {
        return new OpenAIApi(this.configuration);
    }

    public async generate(
        prompt: string,
        model: string = process.env.OPENAI_MODEL_GPT_3_5_TURBO!,
        temperature: number = 0.5,
        max_tokens: number = 1,
    ): Promise<string> {
        const openAiApi = new OpenAIApi(this.configuration);

        try {
            const response = await openAiApi.createChatCompletion({
                model,
                messages: [
                    {
                        role: 'system',
                        content: prompt,
                    },
                ],
                temperature,
                max_tokens,
            });

            return this.parseResult(response);
        } catch (error: any) {
            throw createHttpError(
                error.response.status,
                error.response.statusText,
            );
        }
    }

    private parseResult(result: any): string {
        if (result.data?.choices[0]?.message?.content) {
            return result.data.choices[0].message.content;
        } else {
            throw createHttpError(500, 'No data from model.');
        }
    }
}

export const openAiService = new OpenAiService();
