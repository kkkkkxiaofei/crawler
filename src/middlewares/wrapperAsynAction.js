import 'isomorphic-fetch';

export default store => next => action => {
    const { type, url } = action;
    const { dispatch } = store;
    if (url) {
        next(action);
        dispatch({
            type: `${type}_IN_PROGRESS`,
            data: { inProgress: true }
        });
        return fetch(url, { method: 'GET' })
            .then((res, error) => {
                if (error) {
                    dispatch({
                        type: `${type}_FAILED`,
                        data: { inProgress: false },
                    });
                } else {
                    return res.json();
                }
            })
            .then(items =>
                dispatch({
                    type: `${type}_SUCCESSFULL`,
                    data: {
                        items,
                        inProgress: false
                    }
                })
            );
    } else {
        return next(action);
    }
};