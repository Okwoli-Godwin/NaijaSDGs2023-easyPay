import img from "../../assets/adminsignupimg.png"
import img2 from "../../assets/pay.png"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UseAppDispatch } from "../../Components/Global/Store";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { staffReg } from "../../Components/Api/StaffEndpoint";
import { registerClient } from "../../Components/Global/ReduxState";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import spinner from "../../assets/spinner.svg"
import { useState } from "react";

const StaffSignup = () => {
  const [loading, setLoading] = useState(false)
    const dispatch = UseAppDispatch();
    const navigate = useNavigate();

    const schema = yup.object({
        yourName: yup.string().required(),
      email: yup.string().email().required(),
      position: yup.string().required(),
      password: yup.string().required(),
      companyname: yup.string().required("field must be required"),
    })
        .required()
    type formData = yup.InferType<typeof schema>;

    const {
      handleSubmit,
      reset,
      register,
    } = useForm<formData>({
      resolver: yupResolver(schema),
    });

    const newClient = useMutation({
      mutationFn: (data: any) => staffReg(data),
      mutationKey: ["registerStaff"],

      
      onSuccess: (data: any) => {
        setLoading(false)
        // console.log("my data", data);
        dispatch(registerClient(data.data));
        Swal.fire({
          title: "registration succesful",
          // html: "redirecting to login",
          timer: 2000,
          timerProgressBar: true,
    
          willClose: () => {
            navigate("/staff");
          },
        });
      },
      onError: () => {
        // console.log("error", error);
        // handle error here
        Swal.fire({
          title: "registration failed",
          text: "Something went wrong! .....make sure you fill in the valid details",
          icon: "error",
        });
      },
    });
    const submit = handleSubmit((data) => {
      setLoading(true)
      newClient.mutate(data);
      // console.log("this is yup data", data);
      reset();
    
    });

  return (
    <div className="w-[100%] flex justify-center">
        <div className="w-[100%] flex">
            <div className="w-[50%] h-[100%] border border-l">
                <img src={img} alt="" />
            </div>
            
            <form onSubmit={submit} className="w-[50%] flex flex-col items-center pl-[40px] pr-[40px] pt-[40px] pb-[13px]">
                <img src={img2} alt="" className="w-[120px] "/>
                
                <h3 className="text-[25px] mt-[30px]">
                    Business Payments Made Simple.
                </h3>
                <p className="w-[480px] text-center mt-[20px]">Get a unique bank account number that  enables your company to pay   employees' salaries through the wallet.</p>
                
                <div className="w-[100%] flex flex-col mt-[40px]">
                    <h3>Name</h3>
                    <input {...register("yourName")} type="text" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] outline-none border border-gray-300" placeholder="FullName"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Email</h3>
                    <input {...register("email")} type="email" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="myemail@gmail.com"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Company's Name</h3>
                    <input {...register("companyname")} type="text" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="my company"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Position</h3>
                    <input {...register("position")} type="text" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="staff"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Password</h3>
                    <input {...register("password")} type="password" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="password"/>
                </div>
                <button className="w-[100%] h-[45px] bg-indigo-600 rounded-[4px] flex justify-center items-center text-[#fff] mt-[25px]">
                {loading ? <img src={spinner} className="w-full h-full"/>: "Sign Up"}
                </button>
                <h4 className="mt-[10px]">Already have an account? <span className="text-[#716DF2]">
                <NavLink to="/signinoption">
                     Sign in instaed
                </NavLink>
                  </span></h4>
            </form>
        </div>
    </div>
  )
}

export default StaffSignup