import React from "react";
import {SpinnerOverlay, SpinnerContainer} from "./with-spinner.styles";
import {useSelector} from "react-redux";
import {TemplateState} from "../../redux/templates/template.reducer";

const WithSpinner =
  <P extends object>(WrappedComponent: React.FC<P>) => {
    const isLoading = useSelector<TemplateState, TemplateState["isFetching"]>(
      (state) => state.isFetching
    );

    const Spinner = ({...otherProps}) => {
      return isLoading ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      ) : (
        <WrappedComponent {...(otherProps as P)} />
      );
    };
    
    return Spinner;
  }
  
export default WithSpinner;
