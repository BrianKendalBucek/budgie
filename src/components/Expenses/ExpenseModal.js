import { Close } from "@mui/icons-material";
import { Button, Divider, IconButton, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ExpenseModalList from "./ExpenseModalList";

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
  display: "flex",
  flexDirection: "column",
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
            id="expense Details"
          >
            {singleExpense.notes}

            <IconButton
              edge="end"
              aria-label="close"
              onClick={close}
              sx={{ fontSize: "1.25rem" }}
            >
              <Close />
            </IconButton>
          </Typography>
          {/* <Divider /> */}
          <Box>
            <ExpenseModalList singleExpense={singleExpense} />
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
