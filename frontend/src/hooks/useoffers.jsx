import { createContext, useContext, useState, useEffect } from 'react';
import { studentService, companyService } from '../services/api';
import { authService } from '../services/api';
const OffersContext = createContext(null);

export const OffersProvider = ({ children }) => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [offerDetail, setOfferDetail] = useState(null);

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        setUser(currentUser);
    }, []);

    const getAllOffers = async () => {
        try {
            setLoading(true);
            const currentUser = authService.getCurrentUser();
            if (currentUser?.role === 'STUDENT') {
                const response = await studentService.getOffers();
                setOffers(response);
            } else if (currentUser?.role === 'COMPANY') {
                const response = await companyService.getOffers();
                setOffers(response);
            }
        } catch (error) {
            console.error('Error fetching offers:', error);
        } finally {
            setLoading(false);
        }
    };

    const getOfferDetail = async (offerId) => {
        try {
            setLoading(true);
            const currentUser = authService.getCurrentUser();
            if (currentUser?.role === 'STUDENT') {
                const response = await studentService.getOfferDetail(offerId);
                setOfferDetail(response);
                return response;
            } else if (currentUser?.role === 'COMPANY') {
                const response = await companyService.getOfferDetail(offerId);
                setOfferDetail(response);
                return response;
            }
        } catch (error) {
            console.error('Error fetching offer detail:', error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const createOffer = async (offer) => {
        try {
            setLoading(true);
            const currentUser = authService.getCurrentUser();
            if (currentUser?.role === 'COMPANY') {
                const data = await companyService.createOffer(offer);
                return { success: true, data };
            }
        } catch (error) {
            console.error('Error creating offer:', error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    }

    const deleteOffer = async (offerId) => {
        try {
            setLoading(true);
            const currentUser = authService.getCurrentUser();
            if (currentUser?.role === 'COMPANY') {
                const data = await companyService.deleteOffer(offerId);
                return { success: true, data };
            }
        } catch (error) {
            console.error('Error deleting offer:', error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    const updateOffer = async (offerId, offer) => {
        try {
            setLoading(true);
            const currentUser = authService.getCurrentUser();
            if (currentUser?.role === 'COMPANY') {
                const data = await companyService.updateOffer(offerId, offer);
                return { success: true, data };
            }
        } catch (error) {
            console.error('Error updating offer:', error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    return (
        <OffersContext.Provider value={{ offers, getAllOffers, getOfferDetail, offerDetail, loading, createOffer, deleteOffer, updateOffer }}>
            {children}
        </OffersContext.Provider>
    );
};

export const useOffers = () => {
    const context = useContext(OffersContext);
    if (!context) {
        throw new Error('useOffers must be used within an OffersProvider');
    }
    return context;
};
