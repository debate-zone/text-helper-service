import { defaultEndpointsFactory } from 'express-zod-api';
import {
    inputShortDescriptionSchema,
    outputShortDescriptionSchema,
} from './zodSchema';
import { generateShortDescription } from './services/debateZoneService';

export const generateShortDescriptionEndpoint = defaultEndpointsFactory.build({
    method: 'get',
    input: inputShortDescriptionSchema,
    output: outputShortDescriptionSchema,
    handler: async ({ input, options, logger }) => {
        return generateShortDescription(input);
    },
});
