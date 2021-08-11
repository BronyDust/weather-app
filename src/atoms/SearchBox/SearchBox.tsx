import classnames from "classnames";
import { ComponentType } from "react";

type PropsWitnClassName = {
  className?: string;
};

interface ISearchBoxProps<WrapperProps> {
  as: ComponentType<WrapperProps>;
  wrapperProps: WrapperProps;
}

/** Only big */
function SearchBox<WrapperProps extends PropsWitnClassName>({ as: Wrapper, wrapperProps }: ISearchBoxProps<WrapperProps> & WrapperProps): JSX.Element {
  return (
    <Wrapper {...wrapperProps} className={classnames(wrapperProps.className)}>
      
    </Wrapper>
  );
}

export default SearchBox;
