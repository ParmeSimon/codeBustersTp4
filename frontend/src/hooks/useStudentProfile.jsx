import { useEffect, useState } from "react";
import { studentService } from "../services/api";

function useStudentProfile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
    const fetchProfile = async () => {
        try {
        const data = await studentService.getProfile();
        setProfile(data);
        } catch (err) {
        setError(err.message || "Impossible de charger le profil");
        } finally {
        setLoading(false);
        }
    };
    fetchProfile();
    }, []);

    const updateProfile = async (partial) => {
    // On envoie *au moins* les champs attendus par l’API
    const payload = {
      ...profile,   // garde ce qui existe déjà (id, email, etc.)
      ...partial,   // écrase seulement ce qui a été modifié
    };

    await studentService.updateProfile(payload);

    // 🔥 On met à jour le state local direct avec le payload
    setProfile(payload);
  };

    return { profile, loading, error, updateProfile };
}

export default useStudentProfile;