import {
  Modal,
  Box,
  Button,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 300,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

export default function ConfirmationModal({ open, setModalOpen, values }) {
  const handleClose = () => setModalOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          mb={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CheckCircleIcon sx={{ marginRight: "0.5rem" }} />
          Success!
        </Typography>
        <Typography variant="body1" mt={2} mb={2}>
          You submitted an order for a component with the following
          specifications:
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              {Object.keys(values).map((key) => {
                const formattedKey = key
                  .split("_")
                  .map(
                    (word) => word.charAt(0).toUpperCase() + word.substring(1)
                  )
                  .join(" ");
                return (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      <b>{formattedKey}</b>
                    </TableCell>
                    <TableCell align="right">{values[key]}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" onClick={handleClose} sx={{ mt: 4 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
