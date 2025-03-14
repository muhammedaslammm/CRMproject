import CustomerModal from "./CustomerModal";

const ModalManager = ({ modal, closeModal, ref }) => {
  if (!modal) return null;
  let ModalComponent;
  switch (modal) {
    case "customers":
      ModalComponent = CustomerModal;
      break;
    default:
      return null;
  }
  return <ModalComponent closeModal={closeModal} ref={ref} />;
};

export default ModalManager;
