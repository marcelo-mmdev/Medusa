import {
  Box,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";

interface INPUTProps extends InputProps {
  label?: string;
  helpText?: string;
  error?: string;
}

export const INPUT = ({ label, helpText, error, ...rest }: INPUTProps) => {
  return (
    <FormControl>
      {label && <label>{label}</label>}
      <Input bg={"input.bg"} color={"black"} {...rest} />
      {error && <FormHelperText color={"red"}>{error}</FormHelperText>}
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
    </FormControl>
  );
};

export const CHECKBOX = () => {
  return (
    <Checkbox size={"lg"} color="primary.400" iconColor={"primary.400"}>
      teste
    </Checkbox>
  );
};
