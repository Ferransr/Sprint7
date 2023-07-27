import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="containerWelcome">
      <p className="welcome">Welcome</p>
      <p className="textWelcome">
        Aquí podrás calcular un presupuesto para crear tu página web.
      </p>
      <Link className="presupuestoWeb" to="/presupuestoWeb">
        Calcula tu presupuesto
      </Link>
    </div>
  );
};
