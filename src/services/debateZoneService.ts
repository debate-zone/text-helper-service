import {
    InputShortDescription,
    OutputShortDescription,
} from '../types';
import { openAiService } from './openAIService';
import { textHelperDbController } from '../dbController';
import { Provider } from '../zodSchema';

export const generateShortDescription = async (
    inputShortDescription: InputShortDescription,
): Promise<OutputShortDescription> => {
    const prompt: string = `
        inputTitle: ${inputShortDescription.title}
        inputPoliticalPreference: ${inputShortDescription.politicalPreference}
        outputShortDescription: 
    `;

    const result = await openAiService.generate(prompt);

    const textHelper = await textHelperDbController.create({
        provider: Provider.chatGPT,
        input: prompt,
        output: result,
    });

    return {
        output: textHelper.output
    }
};
