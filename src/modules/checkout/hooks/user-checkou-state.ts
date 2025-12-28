import {parseAsBoolean, useQueryStates} from "nuqs";

export const useUserCheckoutState = () => {
    return useQueryStates({
        success: parseAsBoolean.withDefault(false).withOptions({
            clearOnDefault: true,
        }),
        cancel: parseAsBoolean.withDefault(false).withOptions({
            clearOnDefault: true,
        }),
    });
}