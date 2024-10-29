import { Button } from "@mui/material";
import { ControlledTextField, SubmittedData } from "..";
import { FormField } from "../../types";
import { FormWrapper } from "./styled";
import { useFormGenerator } from "./useFormGenerator";

interface FormGeneratorProps {
  fields: FormField[];
}

export const FormGenerator = ({ fields }: FormGeneratorProps) => {
  const {
    control,
    handleSubmit,
    submittedData,
    onSubmit,
    getLabel,
    getValidationRules,
  } = useFormGenerator();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        {fields.map((field, index) => (
          <ControlledTextField
            key={index}
            name={`field_${index}`}
            control={control}
            type={field.type}
            label={getLabel(field.type)}
            defaultValue={field.default_value || ""}
            rules={getValidationRules(field)}
            options={field.options}
          />
        ))}

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </FormWrapper>

      {submittedData && <SubmittedData submittedData={submittedData} />}
    </form>
  );
};
