import axios from "axios";

export const live = "https://easypay-4op8.onrender.com/staff"

export const chimoneyAPI = "https://api.chimoney.io/v0.2/"

export interface staffData {
  companyname: string;
  email: string;
  yourName: string;
  password: string;
  position: string;
  _id : string
}

export interface aitimeData{
  number: string;
  amount: string;
  networkProvider: string;

}

export interface login {
  email: string;
  companyname: string;
  password: string;
}

export const staffReg = async (data:staffData
 ) => {
  return await axios
    .post(`${live}/staffregister`, data)
    .then((res) => res.data);
};

export const loginClient = async ({ email, companyname, password }: login) => {
  return await axios
    .post(`${live}/stafflogin`, { email, companyname, password })
    .then((res) => res.data);
};

export const getAllClients = async () => {
  return await axios.get(`${live}/allstaff`).then((res) => res.data);
};

export const getOneStaff = async(id:any) =>{
  return await axios.get(`${live}/staff/${id}`).then((res) => res.data);
  }

  export const WithdrawAirtime = async (data:aitimeData)=>{
return await axios.post(`${chimoneyAPI}/payouts/airtime`, data).then((res)=> res.data)
  }