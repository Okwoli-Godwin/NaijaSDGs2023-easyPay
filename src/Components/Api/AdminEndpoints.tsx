import axios from "axios"

export const live = "https://easypay-4op8.onrender.com/admin"

interface adminData {
    companyname: string;
    companyEmail: string;
    yourName: string;
    password: string;
}

export const adminReg = async (data: adminData) => {
    return await axios.post(`${live}/register`, data).then((res) => res.data)
}