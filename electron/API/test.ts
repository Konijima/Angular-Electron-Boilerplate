// Create the object that you want to use in the renderer process
// This object must be exposed in the preload script (preload.ts)
export const Test = {
    hello(): string {
        return 'Hello';
    },

    world(): string {
        return 'World';
    }
}
