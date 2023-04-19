
/**
 * This is the interface that you want to use in the renderer process
 */
export interface TestInterface {
    hello(): string;
    world(): string;
}

/**
 * Create the object that you want to use in the renderer process
 * This object must be exposed in the preload script (preload.ts)
 */
export const Test: TestInterface = {
    hello(): string {
        return 'Hello';
    },

    world(): string {
        return 'World';
    }
}
