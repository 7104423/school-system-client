import { Button, Divider, Grid, MenuItem, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAddContent, useContent } from "../../hooks/useContent";
import { ControlledAutocomplete } from "../fields/input/ControlledAutocomplete";
import { ControlledTextField } from "../fields/input/ControlledTextField";
import { Table } from "./table";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FFF",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export const columns = [
  {
    field: "type",
    headerName: "Digital Content Type",
    renderCell: ({ row: { type, id } }) => (
      <Link to={`/app/digital-content/${id}`}>{type}</Link>
    ),
    flex: 1,
  },
  {
    field: "content",
    headerName: "Value",
    flex: 1,
  },
];

export const SubjectContentEdit = ({ id }) => {
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm();
  const add = useAddContent("digitalContent");
  const [contents, fetchContents] = useContent("subjectContents", id);
  const [topics] = useContent("subjectTopics", id);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(
    async (data) => {
      const parsedData = {
        ...data,
        subject: id,
        topic: data.topic?._id || data.topic?.id,
      };
      await add(parsedData);
      await fetchContents();
      handleClose();
    },
    [add, fetchContents, handleClose, id]
  );

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    fetchContents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container>
        <Grid xs={12} item>
          <Divider variant="middle">Digital Content</Divider>
        </Grid>
        <Grid xs={6} item>
          <Button onClick={handleOpen} variant="outlined">
            Add Digital Content
          </Button>
        </Grid>
        <Grid height={500} xs={12} item>
          <Table columns={columns} rows={contents} />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
          >
            <Grid justifyContent={"end"} container spacing={2}>
              <Grid item xs={12}>
                <ControlledTextField
                  control={control}
                  name="type"
                  fullWidth
                  rules={{ required: "This field is required" }}
                  label="Digital Content Type"
                  select
                >
                  <MenuItem value="Unicorn University link">
                    Unicorn University link
                  </MenuItem>
                  <MenuItem value="YouTube link">YouTube link</MenuItem>
                </ControlledTextField>
              </Grid>
              <Grid item xs={12}>
                <ControlledTextField
                  control={control}
                  name="content"
                  rules={{ required: "This field is required" }}
                  label="Link to Digital Content"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <ControlledAutocomplete
                  control={control}
                  label="Topic"
                  name="topic"
                  options={topics}
                  getOptionLabel={(option) =>
                    option?.name ? `${option?.name || ""}` : ""
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
};
