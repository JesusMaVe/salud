import "./styles/navbar.css";

export default function NavbarActivator({ isModalOpen, setModalToOpen }) {
  return (
    <span>
      <span
        className="Navbar__activator_item2"
        onClick={() => {
          setModalToOpen(true)
        }}
      >
        <ion-icon name="menu-outline"></ion-icon>
      </span>
    </span>
  );
}
