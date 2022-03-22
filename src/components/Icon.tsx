import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface Props extends FontAwesomeIconProps {}

const Icon = ({ name, ...props }: Props) => {
  return <FontAwesomeIcon {...props}>Icon</FontAwesomeIcon>;
};

export default Icon;
