import {
  addFilter,
  removeFilter,
  sortAscending,
  sortDescending,
} from "../../helpers";
import {
  FETCH_TEMPLATES_ERROR,
  FETCH_TEMPLATES_START,
  FETCH_TEMPLATES_SUCCESS,
  LOAD_NEW_PAGE,
  FILTER_BY_SEARCH,
  SORT_BY_CATEGORY,
  SORT_BY_NAME,
  SORT_BY_DATE,
} from "./template.types";

export interface ITemplate {
  name: string;
  category: string[];
  created: string;
  description: string;
  link: string;
}

export interface ISorterKeys {
  [key: string]: string;
}

interface ISorters extends ISorterKeys {
  category: string;
  alphaOrder: string;
  dateOrder: string;
}

export interface TemplateState {
  templates: ITemplate[];
  filteredTemplates: ITemplate[];
  filterResults: ITemplate[];
  originalOrder: ITemplate[];
  totalCount: number;
  currentCount: number;
  countPerPage: number;
  currentPage: number;
  totalPages: number;
  isFetching: boolean;
  error: string | null;
  filters: string[];
  searchValue: string;
  sorters: ISorters;
}

const INITIAL_TEMPLATE_STATE: TemplateState = {
  templates: [],
  filteredTemplates: [],
  filterResults: [],
  originalOrder: [],
  totalCount: 0,
  currentCount: 0,
  countPerPage: 15,
  currentPage: 1,
  totalPages: 0,
  isFetching: false,
  error: null,
  filters: [],
  searchValue: "",
  sorters: {
    category: "All",
    alphaOrder: "Default",
    dateOrder: "Default",
  },
};

export type TemplateAction =
  | {type: typeof FETCH_TEMPLATES_START}
  | {type: typeof FETCH_TEMPLATES_SUCCESS; payload: ITemplate[]}
  | {type: typeof FETCH_TEMPLATES_ERROR; payload: string}
  | {type: typeof LOAD_NEW_PAGE; payload: number}
  | {type: typeof FILTER_BY_SEARCH; payload: string}
  | {type: typeof SORT_BY_CATEGORY; payload: string}
  | {type: typeof SORT_BY_NAME; payload: string}
  | {type: typeof SORT_BY_DATE; payload: string};

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
        newPageState.filteredTemplates =
          state.filters.length === 0
            ? state.templates.slice(lowerLimit, upperLimit)
            : state.filterResults.slice(lowerLimit, upperLimit);
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
            : state.filterResults.slice(
                lowerLimit - state.countPerPage,
                upperLimit - state.countPerPage
              );
      }
      return newPageState;
    case FILTER_BY_SEARCH:
      const searchState = Object.assign({}, state);
      searchState.searchValue = action.payload;

      const searchResults = state.templates.filter((temp) =>
        temp.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      searchState.filterResults = searchResults;

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
          searchState.filterResults = [];
          searchState.totalCount = state.templates.length;
          searchState.totalPages = Math.ceil(
            searchState.totalCount / state.countPerPage
          );
        }
      }
      return searchState;
    case SORT_BY_CATEGORY:
      const sortCategoryState = Object.assign({}, state);
      sortCategoryState.searchValue = "";
      sortCategoryState.sorters.dateOrder = "Default";
      sortCategoryState.sorters.alphaOrder = "Default";
      sortCategoryState.filters = [];

      if (action.payload === "All") {
        sortCategoryState.sorters.category = action.payload;
        sortCategoryState.filteredTemplates = state.templates.slice(
          0,
          state.countPerPage
        );
        sortCategoryState.filterResults = [];
        sortCategoryState.totalCount = state.templates.length;
        sortCategoryState.totalPages = Math.ceil(
          sortCategoryState.totalCount / state.countPerPage
        );
      } else {
        sortCategoryState.sorters.category = action.payload;
        const sortResults = state.templates.filter((temp) =>
          temp.category.includes(action.payload)
        );
        sortCategoryState.filters = addFilter(SORT_BY_CATEGORY, state.filters);
        sortCategoryState.filterResults = sortResults;
        sortCategoryState.filteredTemplates = sortResults.slice(
          0,
          state.countPerPage
        );
        sortCategoryState.totalCount = sortResults.length;
        sortCategoryState.totalPages = Math.ceil(
          sortCategoryState.totalCount / state.countPerPage
        );
      }
      return sortCategoryState;
    case SORT_BY_NAME:
      const sortNameState = Object.assign({}, state);

      if (action.payload === "Default") {
        sortNameState.sorters.alphaOrder = action.payload;
        sortNameState.filters = removeFilter(SORT_BY_NAME, state.filters);
        if (sortNameState.filters.length === 0) {
          sortNameState.filterResults = [];
          sortNameState.originalOrder = [];
          sortNameState.filteredTemplates = state.templates.slice(
            0,
            state.countPerPage
          );
          sortNameState.totalCount = state.templates.length;
          sortNameState.totalPages = Math.ceil(
            sortNameState.totalCount / state.countPerPage
          );
        } else {
          sortNameState.filterResults = [...state.originalOrder];
          sortNameState.filteredTemplates = sortNameState.filterResults.slice(
            0,
            state.countPerPage
          );
          sortNameState.totalCount = state.filterResults.length;
          sortNameState.totalPages = Math.ceil(
            sortNameState.totalCount / state.countPerPage
          );
        }
      } else {
        sortNameState.sorters.alphaOrder = action.payload;

        if (state.filters.length) {
          const toSort = [...state.filterResults];
          sortNameState.originalOrder = [...state.filterResults];

          sortNameState.filterResults =
            action.payload === "Ascending"
              ? sortAscending(toSort, "name")
              : sortDescending(toSort, "name");
        } else {
          const toSort = [...state.templates];
          sortNameState.originalOrder = [...state.templates];

          sortNameState.filterResults =
            action.payload === "Ascending"
              ? sortAscending(toSort, "name")
              : sortDescending(toSort, "name");
        }
        sortNameState.filters = addFilter(SORT_BY_NAME, state.filters);
        sortNameState.filteredTemplates = sortNameState.filterResults.slice(
          0,
          state.countPerPage
        );
      }
      return sortNameState;
    case SORT_BY_DATE:
      const sortDateState = Object.assign({}, state);
      sortDateState.sorters.dateOrder = action.payload;

      if (action.payload === "Default") {
        sortDateState.filters = removeFilter(SORT_BY_DATE, state.filters);
        if (sortDateState.filters.length === 0) {
          sortDateState.filterResults = [];
          sortDateState.originalOrder = [];
          sortDateState.filteredTemplates = state.templates.slice(
            0,
            state.countPerPage
          );
          sortDateState.totalCount = state.templates.length;
          sortDateState.totalPages = Math.ceil(
            sortDateState.totalCount / state.countPerPage
          );
        } else {
          sortDateState.filterResults = [...state.originalOrder];
          sortDateState.filteredTemplates = sortDateState.filterResults.slice(
            0,
            state.countPerPage
          );
          sortDateState.totalCount = state.filterResults.length;
          sortDateState.totalPages = Math.ceil(
            sortDateState.totalCount / state.countPerPage
          );
        }
      } else {
        if (state.filters.length) {
          const toSort = [...state.filterResults];
          sortDateState.originalOrder = [...state.filterResults];

          sortDateState.filterResults =
            action.payload === "Ascending"
              ? sortAscending(toSort, "created")
              : sortDescending(toSort, "created");
        } else {
          const toSort = [...state.templates];
          sortDateState.originalOrder = [...state.templates];

          sortDateState.filterResults =
            action.payload === "Ascending"
              ? sortAscending(toSort, "created")
              : sortDescending(toSort, "created");
        }
        sortDateState.filters = addFilter(SORT_BY_DATE, state.filters);
        sortDateState.filteredTemplates = sortDateState.filterResults.slice(
          0,
          state.countPerPage
        );
      }
      return sortDateState;
    default:
      return state;
  }
};

export default TemplateReducer;
