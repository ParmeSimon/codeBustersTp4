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
    const payload = {
      ...profile,
      ...partial,
    };

    await studentService.updateProfile(payload);

    setProfile(payload);
  };

    return { profile, loading, error, updateProfile };
}

export default useStudentProfile;