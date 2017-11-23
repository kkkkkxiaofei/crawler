import 'isomorphic-fetch';

export const FETCH_LISTINGS = 'FETCH_LISTINGS';

export const fetchListings = uri => dispatch => dispatch({
    type: FETCH_LISTINGS,
    url: `/api/iproperty/srp?uri=${uri}`
});


