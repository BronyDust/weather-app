import { AutoComplete } from "antd";
import { ComponentType, ReactElement } from "react";

type PropsWitnClassName = {
  className?: string;
};

interface ISearchBoxProps<WrapperProps> {
  as: ComponentType<WrapperProps>;
}

/** Only big */
function SearchBox<WrapperProps extends PropsWitnClassName>({ as: Wrapper, ...rest }: ISearchBoxProps<WrapperProps> & WrapperProps): JSX.Element {
  return (
    <Wrapper {...rest}>
      
    </Wrapper>
  );
}

export default SearchBox;
