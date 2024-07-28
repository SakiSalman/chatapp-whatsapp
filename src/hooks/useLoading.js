import { useState, useEffect } from 'react';

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsLoading(false), 100);
        return () => clearTimeout(timeoutId);
    }, []);

    return isLoading;
};

export const useLongLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsLoading(false), 400);
        return () => clearTimeout(timeoutId);
    }, []);

    return isLoading;
};

export const useMidLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsLoading(false), 250);
        return () => clearTimeout(timeoutId);
    }, []);

    return isLoading;
};