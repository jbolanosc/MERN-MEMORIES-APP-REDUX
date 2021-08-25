import React, { useEffect, useState } from "react";
import { Typography, Paper, Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import {
  createPost,
  updatePost,
  getPosts,
} from "../../redux/actions/postActions";

export default function Form({ currentId, setCurrentId }) {
  const [data, setData] = useState({
    creator: "",
    title: "",
    description: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId
      ? state.PostReducer.find((message) => message._id === currentId)
      : null
  );

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Current ", currentId);
    if (currentId === 0) {
      dispatch(createPost(data));
      dispatch(getPosts());
      console.log(data);
      clear();
    } else {
      dispatch(updatePost(currentId, data));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(0);
    setData({
      creator: "",
      title: "",
      description: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post.title || ""}"` : "Creating a Memory"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={data.creator}
          onChange={(e) => setData({ ...data, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={data.tags}
          onChange={(e) =>
            setData({ ...data, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setData({ ...data, selectedFile: base64 })}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
