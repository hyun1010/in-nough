import InternalModal, { ModalProps } from './Modal';
import ModalHeader from './ModalHeader';

type CompoundedComponent = React.FC<ModalProps> & {
  Header: typeof ModalHeader;
};

const Modal = InternalModal as CompoundedComponent;
Modal.Header = ModalHeader;

Modal.displayName = 'Modal';
export default Modal;
