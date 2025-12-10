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
                console.log('Fetching offers for company');
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
            console.log('Fetching offer detail for user:', currentUser?.role);
            console.log('Offer ID:', offerId);
            if (currentUser?.role === 'STUDENT') {
                const response = await studentService.getOfferDetail(offerId);
                setOfferDetail(response);
            } else if (currentUser?.role === 'COMPANY') {
                const response = await companyService.getOfferDetail(offerId);
                setOfferDetail(response);
            }
        } catch (error) {
            console.error('Error fetching offer detail:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <OffersContext.Provider value={{ offers, getAllOffers, getOfferDetail, offerDetail, loading }}>
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
