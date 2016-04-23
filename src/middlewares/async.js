export default function ({dispatch}) {
    return next => action => {
        // Test if payload is a promise
        if (!action.payload || !action.payload.then) {
            // pass through if is it NOT a promise
            return next(action);
        }

        // If it is a promise, resolve it
        action.payload.then(response => {
            // Create a new action with the old type,
            // Replace the payload (promise -> data)
            const newAction = {...action, payload: response};

            // Start the life cycle from the beginning again
            dispatch(newAction);
        });
    }
}