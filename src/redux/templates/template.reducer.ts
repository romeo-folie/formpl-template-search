import {
  FETCH_TEMPLATES_ERROR,
  FETCH_TEMPLATES_START,
  FETCH_TEMPLATES_SUCCESS,
} from "./template.types";

export interface ITemplate {
  name: string;
  category: string[];
  created: string;
  description: string;
  link: string;
}

export interface TemplateState {
  templates: ITemplate[];
  isFetching: boolean;
  error: string | null;
}

const INITIAL_TEMPLATE_STATE: TemplateState = {
  templates: [],
  isFetching: false,
  error: null,
};

export type TemplateAction =
  | {type: typeof FETCH_TEMPLATES_START}
  | {type: typeof FETCH_TEMPLATES_SUCCESS; payload: {templates: ITemplate[]}}
  | {type: typeof FETCH_TEMPLATES_ERROR; payload: string};

const TemplateReducer = (
  state: TemplateState = INITIAL_TEMPLATE_STATE,
  action: TemplateAction
): TemplateState => {
  switch (action.type) {
    case FETCH_TEMPLATES_START:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case FETCH_TEMPLATES_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        templates: action.payload.templates,
      };
    case FETCH_TEMPLATES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default TemplateReducer;
