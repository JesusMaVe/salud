import NavbarActivator from "../navigation/sidebar/NavbarActivator.jsx";
import SideNavbar from "../navigation/sidebar/SideNavbar.jsx";
import "./mainHeader.css";

export default function MainHeader({ isModalOpen, setModalToOpen }) {
	return (
		<div className="MainHeader__navCtn">
			<div className="MainHeader__navBody">

				<span className="responsiveNavButton">
					<NavbarActivator
						isModalOpen={isModalOpen}
						setModalToOpen={setModalToOpen}
					/>
					<SideNavbar
						isModalOpen={isModalOpen}
						setModalToOpen={setModalToOpen}
					/>
				</span>

				<span className="MobileDevice__visible">
					Sistema de salud laboral
				</span>

				<span className="MobileDevice__hidden">
					<a href="/signIn" className="MainHeader__link">
						iniciar sesión
					</a>
				</span>

			</div>
		</div>
	);
}
