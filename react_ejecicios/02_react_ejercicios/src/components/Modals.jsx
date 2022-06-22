import ContactForm from "./ContactForm";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";
import SongSearch from './SongSearch'
import{useModal} from "./hooks/useModal";

const Modals = () => {
  const[isOpenModal1,openModal1,closeModal1]=useModal(false);
  const[isOpenModal2,openModal2,closeModal2]=useModal(false);
  const[isOpenContact,openModalContact,closeModalContact]=useModal(false);
  const[isOpenSong,openModalSong,closeModalSong]=useModal(false);
  const[isOpenPortal,openModalPortal,closeModalPortal]=useModal(false);

  return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button> 
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Hola este es el contenido de mi modal 1</p>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
        </Modal>
        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Modal 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corporis numquam nihil velit atque quidem, accusantium dolores
                 exercitationem iure explicabo tempore recusandae itaque quam 
                 voluptatibus similique earum reprehenderit nemo! 
                 Consequuntur, adipisci.</p>
            <img src="https://placeimg.com/400/400/tech" alt="Tech" />
        </Modal>
        <button onClick={openModalContact}>Contact Form</button>
        <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
          <ContactForm/>

        </Modal>
        <button onClick={openModalSong}>Modal Canciones</button>
        <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
          <SongSearch/>

        </Modal>
        <button onClick={openModalPortal}>Modal Portal</button>
        <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal en Portal</h3>
            <p>Muestra el contenido de un portal que carga e 
              otro modo del dom diferente a un react portal.</p>
            <img src="https://placeimg.com/400/400/tech" alt="Tech" />
        </ModalPortal>
    </div>
  );
};

export default Modals