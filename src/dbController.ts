import { BaseDbController } from '../../debate-zone-micro-service-common-library/src/mongoose/baseDbController';
import { TextHelper } from './types';
import { textHelperModel } from './mongooseSchema';

class TextHelperDbController extends BaseDbController<TextHelper> {}

export const textHelperDbController = new TextHelperDbController(
    textHelperModel,
);
