import { useEffect, useState } from 'react';
import { db } from '../firebase.config';
import { collection, onSnapshot } from 'firebase/firestore';

const useGetData = (collectionName) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const collectionRef = collection(db, collectionName); // Moved inside useEffect

        const getData = async () => {
            //===== Firebase Firestore real-time data update =====
            onSnapshot(collectionRef, (snapshot) => {
                setData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                setLoading(false);
            });
        };

        getData();

        // Cleanup function to unsubscribe from the snapshot listener when the component unmounts
        return () => {
            setLoading(false);
        };
    }, [collectionName]); // Added collectionName as a dependency

    return { data, loading };
};

export default useGetData;

