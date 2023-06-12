import { z } from 'zod';
import { baseZodSchema } from '../../debate-zone-micro-service-common-library/src/zod/baseZodSchema';

export enum Provider {
    chatGPT = 'chat-gpt',
}

export const textHelperSchema = baseZodSchema.extend({
    provider: z.nativeEnum(Provider),
    input: z.string(),
    output: z.string().optional(),
});

export const inputShortDescriptionSchema = z.object({
    title: z.string(),
    politicalPreference: z.string(),
});

export const outputShortDescriptionSchema = textHelperSchema.pick({
    output: true,
});
