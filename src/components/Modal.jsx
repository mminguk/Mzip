import '../styles/Modal.css';

export default function Modal({ children, isOpen }) {
  return (
    <>
      <div className="backdrop" />
      <dialog open={isOpen}>{children}</dialog>
    </>
  );
}
