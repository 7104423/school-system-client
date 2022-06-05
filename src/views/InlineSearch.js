import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { data } from "../config/db/data";

const withDiacritics = "áäčďéěíĺľňóô öŕšťúů üýřžÁÄČĎÉĚÍĹĽŇÓÔ ÖŔŠŤÚŮ ÜÝŘŽ";
const withoutDiacritics = "aacdeeillnoo orstuu uyrzAACDEEILLNOO ORSTUU UYRZ";
const dataWithoutDiacritics = data.map((el) => ({
  ...el,
  task: el.task
    .toLowerCase()
    .split()
    .map((el) => {
      const position = withDiacritics.indexOf(el);
      if (position === -1) {
        return el;
      }
      return withoutDiacritics.charAt(position);
    })
    .join(),
}));

export const InlineSearch = () => {
  const [value, setValue] = useState("");
  console.log(dataWithoutDiacritics);
  const filteredData = data.reduce((acc, el, index) => {
    if (
      dataWithoutDiacritics[index].task.indexOf(value.toLowerCase()) !== -1 ||
      el.task.toLowerCase().indexOf(value.toLowerCase()) !== -1
    ) {
      acc.push(el);
    }
    return acc;
  }, []);

  return (
    <Grid width={"100%"} p={3} container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Search"
          size="small"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Grid>
      {filteredData.map((d) => (
        <Grid item xs={12}>
          <div>
            <strong>Task:</strong> <span>{d.task}</span>
          </div>
          {d.answer !== undefined && (
            <div>
              <strong>Answer:</strong> <span>{String(d.answer)}</span>
            </div>
          )}
          {d.answerList !== undefined && (
            <div>
              <strong>Answer List:</strong>{" "}
              {d.answerList.map((ans, index) => (
                <Box marginLeft={3}>
                  {Array.isArray(ans) && (
                    <p>
                      <strong>{String(ans[0])}</strong>&nbsp;
                      <span>{String(ans[1])}</span>
                    </p>
                  )}
                  {!Array.isArray(ans) && (
                    <p>
                      <strong>{index + 1}.</strong>
                      <span>{String(ans)}</span>
                    </p>
                  )}
                </Box>
              ))}
            </div>
          )}
        </Grid>
      ))}
    </Grid>
  );
};
