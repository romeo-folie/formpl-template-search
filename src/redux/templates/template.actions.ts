import {TemplateAction, ITemplate} from "./template.reducer";
import {
  FETCH_TEMPLATES_ERROR,
  FETCH_TEMPLATES_START,
  FETCH_TEMPLATES_SUCCESS,
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
  payload: {templates},
});

export const fetchTemplatesFailure = (error: string): TemplateAction => ({
  type: FETCH_TEMPLATES_ERROR,
  payload: error,
});

export const fetchTemplatesAsync =
  () => async (dispatch: Dispatch<TemplateAction>) => {
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
