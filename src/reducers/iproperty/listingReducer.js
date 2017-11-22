import { FETCH_LISTINGS } from '../../actions/iproperty/listingAction';

export default (state = {}, { type, data }) => {
  if (type.startsWith(FETCH_LISTINGS)) {
    return { ...state, ...data};
  }
  return state;
};