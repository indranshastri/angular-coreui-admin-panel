import { Action} from '@ngrx/store';
import FAQ from '../../models/faqs.model';


export const LOAD_FAQ = '[FAQ] load faq';
export const LOAD_FAQ_SUCCESS = '[FAQ] load faq success';
export const LOAD_FAQ_ERROR = '[FAQ] load faq error';

/**
 * Load faq action
 * @export
 * @class LoadFAQAction
 * @implements {Action}
 */

export class LoadFaqAction implements Action {
  readonly type = LOAD_FAQ;
  constructor(public payload: any = null) {}
}

/**
 * Error loading Faq  action
 * @export
 * @class ErrorLoadingFaqAction
 * @implements {Action}
 */

export class ErrorLoadingFaqAction implements Action {
  readonly type = LOAD_FAQ_ERROR;
  constructor(public payload: any = null) {}
}

/**
 * Success loading Faq action
 * @export
 * @class SuccessLoadingFaqAction
 * @implements {Action}
 */

export class SuccessLoadingFaqAction implements Action {
  readonly type = LOAD_FAQ_SUCCESS;
  constructor(public payload: any = null) {}
}


// Export action types
export type LoadFAQActions = LoadFaqAction|ErrorLoadingFaqAction|SuccessLoadingFaqAction;
