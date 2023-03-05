import { FC, useContext, useState } from "react";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import { FaCheckCircle, FaTimesCircle, FaTrash } from "react-icons/fa";
import { style } from "../../../assets/materialUI-styles";
import { ClientContext } from "../../../context";
import { IClient } from "../../../interfaces";

interface Props {
  client: IClient;
}

export const ClientDeleteCompont: FC<Props> = ({ client }) => {
  const { handleDelete } = useContext(ClientContext);
  const [open, setOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteClient = async (id: string) => {
    setIsDeleting(true);
    const { error, deleted } = await handleDelete(id);
    if (error) setError(true);
    if (deleted) setIsDeleted(true);

    setIsDeleting(false);
  };

  return (
    <div>
      <Tooltip title="Borrar">
        <IconButton onClick={handleOpen} sx={{ color: " #bd1919 " }}>
          <FaTrash />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Esta seguro?
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Cliente: <strong>{client.fullName}</strong> <br />
            Cédula: <strong>{client.ID_number}</strong>
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Si desea continuar presione Eliminar
          </Typography>

          <Box display="flex">
            <Button
              onClick={() => deleteClient(client._id)}
              color="error"
              sx={{ mb: 2, mt: 2, borderColor: "red", mr: 2 }}
              disabled={isDeleted}
            >
              Eliminar
            </Button>

            <Button
              onClick={handleClose}
              color="primary"
              sx={{ mb: 2, mt: 2 }}
              disabled={isDeleted}
            >
              Cancelar
            </Button>
          </Box>

          <Chip
            label="Error en la acción"
            color="error"
            icon={<FaTimesCircle />}
            className="fadeIn"
            sx={{ display: error ? "flex" : "none" }}
          />

          <Chip
            label="Eliminado correctamente"
            color="success"
            icon={<FaCheckCircle />}
            className="fadeIn"
            sx={{ display: isDeleted ? "flex" : "none" }}
          />

          <CircularProgress
            thickness={2}
            sx={{ display: isDeleting ? "flex" : "none" }}
          />
        </Box>
      </Modal>
    </div>
  );
};
