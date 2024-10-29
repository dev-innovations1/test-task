import { Box, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

type SubmittedDataProps = {
  submittedData: FieldValues;
};

export const SubmittedData = ({ submittedData }: SubmittedDataProps) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Submitted Data:
      </Typography>

      <ul>
        {Object.entries(submittedData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value?.toString()}
          </li>
        ))}
      </ul>

      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Stringify Data: {JSON.stringify(submittedData)}
      </Typography>
    </Box>
  );
};
