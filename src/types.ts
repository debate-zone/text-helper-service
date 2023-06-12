import {
    inputShortDescriptionSchema,
    outputShortDescriptionSchema,
    textHelperSchema,
} from './zodSchema';
import { z } from 'zod';

export type TextHelper = z.infer<typeof textHelperSchema>;

export type InputShortDescription = z.infer<typeof inputShortDescriptionSchema>;

export type OutputShortDescription = z.infer<
    typeof outputShortDescriptionSchema
>;
