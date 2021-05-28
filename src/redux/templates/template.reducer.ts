import {addFilter, removeFilter} from "../../helpers";
import {
  FETCH_TEMPLATES_ERROR,
  FETCH_TEMPLATES_START,
  FETCH_TEMPLATES_SUCCESS,
  LOAD_NEW_PAGE,
  FILTER_BY_SEARCH,
  SORT_BY_CATEGORY,
  SORT_BY_NAME,
  SORT_BY_DATE
} from "./template.types";

export interface ITemplate {
  name: string;
  category: string[];
  created: string;
  description: string;
  link: string;
}

// To add
// filteredTemplates
// totalCount - count of fetched templates
// currentCount - to be used as limit when slicing templates - initial value is the countPerPage
// countPerPage
// currentPage
// totalPages

// filteredPages
export interface TemplateState {
  templates: ITemplate[];
  filteredTemplates: ITemplate[];
  searchResults: ITemplate[];
  totalCount: number;
  currentCount: number;
  countPerPage: number;
  currentPage: number;
  totalPages: number;
  isFetching: boolean;
  error: string | null;
  filters: string[];
}

const INITIAL_TEMPLATE_STATE: TemplateState = {
  templates: [],
  filteredTemplates: [],
  searchResults: [],
  totalCount: 0,
  currentCount: 0,
  countPerPage: 15,
  currentPage: 1,
  totalPages: 0,
  isFetching: false,
  error: null,
  filters: [],
};

export type TemplateAction =
  | {type: typeof FETCH_TEMPLATES_START}
  | {type: typeof FETCH_TEMPLATES_SUCCESS; payload: ITemplate[]}
  | {type: typeof FETCH_TEMPLATES_ERROR; payload: string}
  | {type: typeof LOAD_NEW_PAGE; payload: number}
  | {type: typeof FILTER_BY_SEARCH; payload: string}
  | {type: typeof SORT_BY_CATEGORY; payload: string}
  | {type: typeof SORT_BY_NAME; payload: string}
  | {type: typeof SORT_BY_DATE; payload: string}

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
      const totalCount = action.payload.length;
      const filteredTemplates = action.payload.slice(0, state.countPerPage);
      const totalPages = Math.ceil(totalCount / state.countPerPage);

      return {
        ...state,
        error: null,
        isFetching: false,
        totalCount,
        totalPages,
        templates: action.payload,
        filteredTemplates,
        currentCount: state.countPerPage,
      };
    case FETCH_TEMPLATES_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case LOAD_NEW_PAGE:
      const newPageState = Object.assign({}, state);

      if (action.payload === 1) {
        const upperLimit = state.currentCount + state.countPerPage;
        const lowerLimit = state.currentCount;

        newPageState.currentCount += state.countPerPage;
        newPageState.currentPage += action.payload;
        // we might have an issue here as it slices the main
        // templates array in state
        // I could instead make it slice the filteredTemplates
        // but would that make sense?
        // maybe this could be dependent on if the filters array is populated
        // if it is, we'll slice filteredTemplates instead
        newPageState.filteredTemplates =
          state.filters.length === 0
            ? state.templates.slice(lowerLimit, upperLimit)
            : state.searchResults.slice(lowerLimit, upperLimit);
      } else {
        const upperLimit = state.currentCount;
        const lowerLimit = state.currentCount - state.countPerPage;

        newPageState.currentCount = lowerLimit;
        newPageState.currentPage += action.payload;
        newPageState.filteredTemplates =
          state.filters.length === 0
            ? state.templates.slice(
                lowerLimit - state.countPerPage,
                upperLimit - state.countPerPage
              )
            : state.searchResults.slice(
                lowerLimit - state.countPerPage,
                upperLimit - state.countPerPage
              );
      }
      return newPageState;
    case FILTER_BY_SEARCH:
      const searchState = Object.assign({}, state);
      const searchResults = state.templates.filter((temp) =>
        temp.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      searchState.searchResults = searchResults;

      if (action.payload) {
        searchState.filters = addFilter(FILTER_BY_SEARCH, state.filters);
        searchState.filteredTemplates = searchResults.slice(
          0,
          state.countPerPage
        );
        searchState.totalCount = searchResults.length;
        searchState.totalPages = Math.ceil(
          searchState.totalCount / state.countPerPage
        );
      } else {
        searchState.filters = removeFilter(FILTER_BY_SEARCH, state.filters);
        if (searchState.filters.length === 0) {
          searchState.filteredTemplates = state.templates.slice(
            0,
            state.countPerPage
          );
          searchState.searchResults = [];
          searchState.totalCount = state.templates.length;
          searchState.totalPages = Math.ceil(
            searchState.totalCount / state.countPerPage
          );
        }
      }
      return searchState;
    default:
      return state;
  }
};

export default TemplateReducer;
