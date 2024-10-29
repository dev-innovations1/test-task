// ControlledTextField.tsx
import { MenuItem, TextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

type ControlledTextFieldProps = TextFieldProps & {
  name: string;
  control: Control<FieldValues>;
  rules?: any;
  type?: "text" | "longtext" | "number" | "dropdown";
  options?: (string | number)[];
  label: string;
};

export const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
  name,
  control,
  rules,
  type = "text",
  options,
  label,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...rest}
          label={label}
          variant="outlined"
          fullWidth
          error={!!error}
          helperText={error ? error.message : ""}
          multiline={type === "longtext"}
          rows={type === "longtext" ? 4 : 1}
          select={type === "dropdown"}
          type={type === "number" ? "number" : "text"}
        >
          {type === "dropdown" &&
            options?.map((option, idx) => (
              <MenuItem key={idx} value={option}>
                {option}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
  );
};
