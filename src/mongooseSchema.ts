import { Document, model, Schema } from 'mongoose';
import { baseSchema } from '../../debate-zone-micro-service-common-library/src/mongoose/baseSchema';
import { TextHelper } from './types';
import { CollectionsEnum } from '../../debate-zone-micro-service-common-library/src/enums/collectionsEnum';
import { Provider } from './zodSchema';

export type TextHelperDocument = Document & TextHelper;

export const textHelperMongooseSchema: Schema = baseSchema.add({
    provider: {
        type: String,
        enum: Object.values(Provider),
        required: true,
    },
    input: {
        type: String,
        required: true,
    },
    output: {
        type: String,
    },
});

export const textHelperModel = model<TextHelperDocument>(
    CollectionsEnum.TEXT_HELPER,
    textHelperMongooseSchema,
);
