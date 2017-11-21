import 'isomorphic-fetch';

export const FETCH_LISTINGS = 'FETCH_LISTINGS';

export const fetchListings = (uri) => {
    fetch(`/api/iproperty/listing?uri=${uri}`)
        .then(res => {
            if(res.status === 200) {
                return res.json();
            }
            throw new Error('fetch error');
        })
        .then(data => ({
            type: FETCH_LISTINGS,
            data
        }));
};

