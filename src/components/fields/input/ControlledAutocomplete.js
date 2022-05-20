import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const ControlledAutocomplete = ({
  options = [],
  getOptionLabel,
  control,
  defaultValue,
  name,
  renderOption,
  multiple,
  label,
  rules,
}) => {
  return (
    <Controller
      rules={rules}
      render={({ field: { value, ...field }, fieldState }) => {
        return (
          <Autocomplete
            multiple={multiple}
            options={options}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  required={rules?.required}
                  label={label}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              );
            }}
            {...field}
            value={value || []}
            onChange={(e, data) => field.onChange(data)}
          />
        );
      }}
      onChange={([, data]) => data}
      defaultValue={defaultValue}
      name={name}
      control={control}
    />
  );
};
