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
            for (let i = 1; i <= 8+userData.newAudios.length; i++) {
              audioData.push(
                await getDownloadURL(ref(storage, `${user.uid}/audio${i}`))
              );
            }

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
