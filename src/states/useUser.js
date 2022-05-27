import { useContext, createContext, useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, getDownloadURL, updateMetadata } from 'firebase/storage';
import { auth, storage } from '../firebase/config';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

// objeto que guardará todos los datos del usuario logueado

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'dataUser', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const audioData = [];
          try {
            console.log('iniciando carga');
            audioData.push(
              await getDownloadURL(ref(storage, `${user.uid}/audio1`))
            );
            audioData.push(
              await getDownloadURL(ref(storage, `${user.uid}/audio2`))
            );
            audioData.push(
              await getDownloadURL(ref(storage, `${user.uid}/audio3`))
            );
            audioData.push(
              await getDownloadURL(ref(storage, `${user.uid}/audio4`))
            );
            audioData.push(
              await getDownloadURL(ref(storage, `${user.uid}/audio5`))
            );
            audioData.push(
              await getDownloadURL(ref(storage, `${user.uid}/audio6`))
            );
            audioData.push(
              await getDownloadURL(ref(storage, `${user.uid}/audio7`))
            );
            audioData.push(
              await getDownloadURL(ref(storage, `${user.uid}/audio8`))
            );

            setUser({ ...userData, audios: audioData });
          } catch (err) {
            console.log(`ERROR: ${err}`);
          }
        }
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={user}>
      {!loading && children}
    </UserContext.Provider>
  );
};
