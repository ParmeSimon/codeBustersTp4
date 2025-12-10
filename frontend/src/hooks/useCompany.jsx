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

    const getApplications = async () => {
        try {
            const applications = await companyService.getApplications();
            return applications;
        } catch (error) {
            console.error('Error fetching applications:', error);
            return [];
        }
    };

    const updateApplicationStatus = async (applicationId, status) => {
        try {
            await companyService.updateApplicationStatus(applicationId, status);
            return { success: true };
        } catch (error) {
            console.error('Error updating application status:', error);
            return { success: false, error: error.message };
        }
    };

    return { profile, loading, error, updateProfile, getApplications, updateApplicationStatus };
}

export default useCompanyProfile;