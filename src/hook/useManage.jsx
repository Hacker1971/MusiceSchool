import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import axios from 'axios';
const useManage = () => {
    const {  loading } = useAuth();
   
    const { refetch, data: cart = [] } = useQuery({
        queryKey: [ ],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users`)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useManage;