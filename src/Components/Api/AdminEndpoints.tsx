import axios from "axios"

export const live = "https://easypay-4op8.onrender.com/admin"

interface adminData {
    companyname: string;
    companyEmail: string;
    yourName: string;
    password: string;
}

interface login {
    companyEmail: string;
    password: string;
    companyname: string
}

export const adminReg = async (data: adminData) => {
    return await axios.post(`${live}/register`, data).then((res) => res.data)
}

export const adminLogin = async({
    companyEmail,
    password,
    companyname,
}: login) => {
    return await axios.post(`${live}/login`, {
        companyEmail,
        password,
        companyname
    }).then((res) => res.data)
}

export const getOneAdmin = async (id: any) => {
  return await axios.get(`${live}/${id}`).then((res) => res.data);
};