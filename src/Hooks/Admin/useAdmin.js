import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;

        const url = `https://atifsupermart.onrender.com/admin/${email}`;
        if(email){
            fetch(url, {
                method:'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
                setAdminLoading(false);
            })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;

// ,
//                     authorization: `Bearer ${localStorage.getItem('accessToken')}`