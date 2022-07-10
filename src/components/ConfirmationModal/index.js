import { Modal, Box, Button, Divider, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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
        <Typography variant="h5" component="h2" mb={2}>
          Success!
        </Typography>
        <Divider />
        <Typography variant="body2" mt={2} mb={2}>
          You submitted an order for a component with the following
          specifications:
        </Typography>
        {Object.keys(values).map((key) => {
          const formattedKey = key
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
            .join(" ");
          return (
            <Typography
              variant="subtitle2"
              key={key}
            >{`${formattedKey}: ${values[key]}`}</Typography>
          );
        })}
        <Button variant="contained" onClick={handleClose} sx={{ mt: 4 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
}
