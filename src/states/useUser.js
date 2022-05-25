import { useContext,createContext, useState, useEffect } from "react";
import {db} from '../firebase/config';
import { doc, getDoc } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import { ref, getDownloadURL, updateMetadata } from "firebase/storage";
import { storage } from '../firebase/config';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};



// objeto que guardará todos los datos del usuario logueado

  export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        const getData =async () =>{
            if (auth.currentUser ){
                console.log(auth.currentUser.uid)
                const docRef = doc(db, "dataUser", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const userData = docSnap.data();
                const audioData = []
                try {
                    console.log('iniciando carga')
                    await updateMetadata(ref(storage, `${auth.currentUser.uid}/audio1.ogg`), {
                        contentType: 'audio/ogg'})
                  audioData.push(await getDownloadURL(ref(storage, `${auth.currentUser.uid}/audio1.ogg`)));
                  audioData.push(await getDownloadURL(ref(storage, `${auth.currentUser.uid}/audio2`)));
                  audioData.push(await getDownloadURL(ref(storage, `${auth.currentUser.uid}/audio3`)));
                  audioData.push(await getDownloadURL(ref(storage, `${auth.currentUser.uid}/audio4`)));
                //   audioData.push(await getDownloadURL(ref(storage, `${auth.currentUser.uid}/audio5`)));
                //   audioData.push(await getDownloadURL(ref(storage, `${auth.currentUser.uid}/audio6`)));
                //   audioData.push(await getDownloadURL(ref(storage, `${auth.currentUser.uid}/audio7`)));
                //   audioData.push(await getDownloadURL(ref(storage, `${auth.currentUser.uid}/audio8`)));
                  console.log('listo')
                  setUser({...userData, audioData})
                // setUser(userData);
                } catch (e){
                  console.log("hay un error con los audios unu: ", e);
                }
            }else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }
            setLoading(false)
        }
        getData();
    }, []);
  
  
    return (
      <UserContext.Provider value={user}>
        {!loading && children}
      </UserContext.Provider>
    );
  };