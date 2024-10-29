import { Typography } from "@mui/material";
import { FormGenerator } from "./components";
import { MainLayout } from "./styled";
import { FormField } from "./types";

import fields from "./file.json";

export const App = () => {
  return (
    <MainLayout>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Dynamic Form
      </Typography>

      {fields.length > 0 && <FormGenerator fields={fields as FormField[]} />}
    </MainLayout>
  );
};
