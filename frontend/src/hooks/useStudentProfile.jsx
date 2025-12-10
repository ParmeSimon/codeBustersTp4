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

  const applyToOffer = async (offerId, coverLetter) => {
    const response = await studentService.applyToOffer(offerId, coverLetter);
    return response.data;
  };

  const getApplications = async () => {
    try {
      const applications = await studentService.getApplications();
      return applications;
    } catch (error) {
      console.error('Error fetching applications:', error);
      return [];
    }
  };

  const deleteApplication = async (applicationId) => {
    try {
      await studentService.deleteApplication(applicationId);
      return { success: true };
    } catch (error) {
      console.error('Error deleting application:', error);
      return { success: false, error: error.message };
    }
  };

  return { profile, loading, error, updateProfile, applyToOffer, getApplications, deleteApplication };
}


export default useStudentProfile;