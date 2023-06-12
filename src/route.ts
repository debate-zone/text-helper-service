import { Routing } from 'express-zod-api';
import { generateShortDescriptionEndpoint } from './endpoint';

export const routing: Routing = {
    v1: {
        'text-helper': {
            'short-description': generateShortDescriptionEndpoint,
        },
    },
};
