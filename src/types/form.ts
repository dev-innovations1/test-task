export interface FormField {
  default_value?: string | number | boolean;
  validation?: string;
  min_value?: number;
  max_value?: number;
  options?: (string | number)[];
  type: "text" | "longtext" | "dropdown" | "number";
}
