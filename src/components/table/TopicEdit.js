import { Button, Divider, Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAddContent, useContent } from "../../hooks/useContent";
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

export const topicColumns = [
  {
    field: "name",
    headerName: "Topic name",
    renderCell: ({ row: { name, id } }) => (
      <Link to={`/app/topic/${id}`}>{name}</Link>
    ),
    flex: 1,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
  },
];

export const TopicEdit = ({ id }) => {
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm();
  const add = useAddContent("topic");
  const [topics, fetchTopics] = useContent("subjectTopics", id);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(
    async (data) => {
      const parsedData = {
        ...data,
        subject: id,
      };
      await add(parsedData);
      await fetchTopics();
      handleClose();
    },
    [add, fetchTopics, handleClose, id]
  );

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    fetchTopics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container>
        <Grid xs={12} item>
          <Divider variant="middle">Topics</Divider>
        </Grid>
        <Grid xs={6} item>
          <Button onClick={handleOpen} variant="outlined">
            Create Topic
          </Button>
        </Grid>
        <Grid height={500} xs={12} item>
          <Table columns={topicColumns} rows={topics} />
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
                  name="name"
                  label="Topic name"
                  variant="outlined"
                  rules={{ required: "This field is required" }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <ControlledTextField
                  control={control}
                  name="description"
                  label="Topic description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={10}
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
