import FAQ from '../../models/faqs.model';
import * as fromLoadFAQ from '../actions/load-faq.action';
/**
 * Load FAQ state
 *
 * @export
 * @interface LoadFAQState
 */
export interface LoadFAQState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  error?: any;
  data: Array<FAQ>;
}

export const initialState: LoadFAQState = {
  loading: false,
  loaded: false,
  failed: false,
  data: [],
  error: null
};

/**
 * Reducer
 *
 * @export
 * @param {LoadFAQState} [state=initialState]
 * @param {fromLoadFAQ.LoadFAQActions} action
 * @returns
 */
export function reducer(
  state: LoadFAQState = initialState,
  action: fromLoadFAQ.LoadFAQActions
) {

  switch (action.type) {
    case fromLoadFAQ.LOAD_FAQ: {
      return {
        ...state,
        loading: true,
        loaded: false,
        failed: false
      };
    }

    case fromLoadFAQ.LOAD_FAQ_ERROR: {
      return {
        ...state,
        failed: true,
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case fromLoadFAQ.LOAD_FAQ_SUCCESS: {
      return {
        ...state,
        failed: false,
        loading: false,
        loaded: true,
        data: action.payload
      };
    }

  }

  return state;
}

export const getLoadFAQLoading = (state: LoadFAQState) => state.loading;
export const getLoadFAQLoaded = (state: LoadFAQState) => state.loaded;
export const getLoadFAQFailed = (state: LoadFAQState) => state.failed;
export const getLoadFAQError = (state: LoadFAQState) => state.error;
export const getLoadFAQData = (state: LoadFAQState) => state.data;
