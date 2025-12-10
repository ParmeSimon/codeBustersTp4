import { useEffect, useState } from "react";
import { companyService } from "../services/api";

function useCompanyProfile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await companyService.getProfile();
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

        await companyService.updateProfile(payload);

        setProfile(payload);
    };

    return { profile, loading, error, updateProfile };
}

export default useCompanyProfile;