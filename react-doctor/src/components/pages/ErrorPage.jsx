import {Link} from "react-router-dom";

export function ErrorPage() {
    return <div className="container mt-5 mb-5 ">
        <h1>Erreur !</h1>
        <p>La page demandée n'existe pas</p>
        <p><Link to={"/"}>Retour à l'accueil</Link></p>
    </div>
}