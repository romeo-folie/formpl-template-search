import React from "react";
import {SpinnerOverlay, SpinnerContainer} from "./with-spinner.styles";
import {useSelector} from "react-redux";
import {TemplateState} from "../../redux/templates/template.reducer";

const WithSpinner = <P extends object>(WrappedComponent: React.FC<P>) => {
  const isLoading = useSelector<TemplateState, TemplateState["isFetching"]>(
    (state) => state.isFetching
  );

  const Spinner = ({...props}: P) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return Spinner;
};

export default WithSpinner;
