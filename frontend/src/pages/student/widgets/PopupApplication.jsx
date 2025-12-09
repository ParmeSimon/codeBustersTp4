import style from "../../../styles/student.module.css";

function PopupApplication({ onClose }) {
    return (
        <div className={style.popupOverlay} onClick={onClose}>
            <div className={style.popupCardApplication} onClick={(e) => e.stopPropagation()}>
                <h2>Candidature</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className={style.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Veuillez écrire un message"></textarea>
                    </div>
                    <div className={style.popupActions}>
                        <button className={style.applicationBtn}>Envoyer</button>
                        <button className={style.cancelBtn} onClick={onClose}>Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PopupApplication;