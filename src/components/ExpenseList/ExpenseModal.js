import {
  Button,
  Divider,
  List,
  ListItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "#E5E8ED",
  border: "1px solid #9ACCE3",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  fontFamily: "monospace",
};

export default function ExpenseModal({
  singleExpense,
  open,
  close,
  handleDelete,
}) {
  const [delBtn, setDelBtn] = useState(false);

  const toggleDel = () => setDelBtn((prev) => !prev);
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            sx={{
              fontFamily: "monospace",
            }}
            id="expense Details"
          >
            {singleExpense.notes}
          </Typography>
          <Divider />
          <Box
            sx={{
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            <Stack direction={"column"} spacing={2} divider={<Divider />}>
              <List>
                <ListItem>
                  {singleExpense.cost}
                  {singleExpense.code.toUpperCase()}
                </ListItem>

                <ListItem>{singleExpense.curr_name}</ListItem>
                <ListItem>{singleExpense.date_paid}</ListItem>
              </List>
            </Stack>
          </Box>
          {delBtn ? (
            <Button
              onClick={() => {
                handleDelete(singleExpense.ex_id);
                close();
              }}
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "red",
                "&:hover": { bgcolor: "red" },
              }}
            >
              Confirm
            </Button>
          ) : (
            <Button
              onClick={toggleDel}
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#9ACCE3",
                "&:hover": { bgcolor: "red" },
              }}
            >
              DELETE
            </Button>
          )}
        </Box>
      </Modal>
    </div>
  );
}
