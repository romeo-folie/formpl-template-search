import {TemplateAction, ITemplate} from "./template.reducer";
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
import {Dispatch} from "redux";
import axios from "axios";

export const fetchTemplatesStart = (): TemplateAction => ({
  type: FETCH_TEMPLATES_START,
});

export const fetchTemplatesSuccess = (
  templates: ITemplate[]
): TemplateAction => ({
  type: FETCH_TEMPLATES_SUCCESS,
  payload: templates,
});

export const fetchTemplatesFailure = (error: string): TemplateAction => ({
  type: FETCH_TEMPLATES_ERROR,
  payload: error,
});

export const fetchTemplates =
  () =>
  async (dispatch: Dispatch<TemplateAction>): Promise<void> => {
    try {
      dispatch(fetchTemplatesStart());
      const response = await axios.get(
        "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
      );
      dispatch(fetchTemplatesSuccess(response.data));
    } catch (err) {
      dispatch(fetchTemplatesFailure(err.message));
    }
  };

export const loadNewPage = (page: number): TemplateAction => ({
  type: LOAD_NEW_PAGE,
  payload: page,
});

export const searchTemplates = (value: string): TemplateAction => ({
  type: FILTER_BY_SEARCH,
  payload: value,
});

interface ISort {
  label: string;
  value: string;
}

// create action creator for sortBySelect
// it should come with the name of the select and the value
export const sortTemplates = (sortData: ISort): TemplateAction | undefined => {
  switch (sortData.label) {
    case "Category":
      return {type: SORT_BY_CATEGORY, payload: sortData.value};
    case "Alphabetical Order":
      return {type: SORT_BY_NAME, payload: sortData.value};
    case "Date Created":
      return {type: SORT_BY_DATE, payload: sortData.value};
    default:
      return;
  }
};
