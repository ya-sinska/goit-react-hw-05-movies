import { useEffect} from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalBox } from "./Modal.styled"
import { Loader } from 'components/Loader/Loader';
import { NoFetchResults } from 'components/NoFetchResults/NoFetchResults';
import { createPortal } from 'react-dom';
import { useFetchVideo } from 'hooks/useFetchVideo';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, id, isModalOpen }) => {
const { movie, status } = useFetchVideo(id);

  useEffect(() => {
   const handleKeyDown = e => {
     if (e.code === 'Escape') {
    onClose();
    }};
    window.addEventListener('keydown', handleKeyDown);
    return () => {window.removeEventListener('keydown', handleKeyDown)} ;
  },[onClose])

 const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
 };
  return createPortal(
    <>
      {isModalOpen && (
        <Overlay onClick={handleBackdropClick}>
            <ModalBox>         
                {status === 'pending' && <Loader />}
                {status === 'resolved' &&
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie[0].key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>}
                {status === 'rejected' && <NoFetchResults text={"Sorry can't find this page:("}/>}
        
          </ModalBox>
        </Overlay>)}
    </>, modalRoot)
  
}

Modal.propTypes = {
  onClose: PropTypes.func,
  id: PropTypes.number,
  isModalOpen: PropTypes.bool,
}