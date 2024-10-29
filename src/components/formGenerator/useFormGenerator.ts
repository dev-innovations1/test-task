import { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FormField } from "../../types";

export const useFormGenerator = () => {
  const { control, handleSubmit } = useForm<FieldValues>();

  const [submittedData, setSubmittedData] = useState<FieldValues | null>(null);

  const onSubmit = (data: FieldValues) => {
    setSubmittedData(data);
  };

  const getLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      text: "Text",
      longtext: "Long Text",
      number: "Number",
      dropdown: "Dropdown",
    };
    return labels[type] || "Field";
  };

  const getValidationRules = useMemo(
    () => (field: FormField) => ({
      pattern: field.validation
        ? { value: new RegExp(field.validation), message: "Invalid format" }
        : undefined,
      min: field.min_value
        ? {
            value: field.min_value,
            message: `Minimum value is ${field.min_value}`,
          }
        : undefined,
      max: field.max_value
        ? {
            value: field.max_value,
            message: `Maximum value is ${field.max_value}`,
          }
        : undefined,
    }),
    []
  );

  return {
    control,
    handleSubmit,
    submittedData,
    onSubmit,
    getLabel,
    getValidationRules,
  };
};
