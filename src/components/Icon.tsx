import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface Props extends FontAwesomeIconProps {}

const Icon = ({ name, ...props }: Props) => {
  return <FontAwesomeIcon {...props}>Icon</FontAwesomeIcon>;
};

export default Icon;
