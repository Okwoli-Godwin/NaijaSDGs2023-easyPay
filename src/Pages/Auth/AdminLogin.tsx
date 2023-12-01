import img from "../../assets/adminsignupimg.png"
import img2 from "../../assets/pay.png"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { adminLogin } from "../../Components/Api/AdminEndpoints";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { UseAppDispatch } from "../../Components/Global/Store";
import { registerAdmin } from "../../Components/Global/ReduxState";


const AdminLogin = () => {
    const dispatch = UseAppDispatch()
    const navigate = useNavigate()
    const schema = yup.object({
        companyEmail: yup.string().email().required(),
        password: yup.string().required(),
        companyname: yup.string().required("field must be required"),
    })
        .required();

    type formData = yup.InferType<typeof schema>;

    const {
        handleSubmit,
        register,
    } = useForm<formData>({
        resolver: yupResolver(schema),
    });

    const signin = useMutation({
    mutationFn: adminLogin,
    mutationKey: ["loginAllAdmin"],

    onSuccess: (myData: any) => {
      dispatch(registerAdmin(myData.data));
      Swal.fire({
        title: "login",
        html: "redirecting to dashboard",
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          navigate("/");
        },
      });
    },
    onError: () => {
      Swal.fire({
        title: "registration failed",
        text: "email or password incorrect",
        icon: "error",
      });
    },
  });
  
    const submit = handleSubmit((data: any) => {
    signin.mutate(data);
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
                    <h3>Company Name</h3>
                    <input {...register("companyname")} type="text" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] outline-none border border-gray-300" placeholder="my company"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Company Email</h3>
                    <input {...register("companyEmail")} type="email" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="mycompany@gmail.com"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Password</h3>
                    <input {...register("password")} type="password" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="password"/>
                </div>
                <div className="w-[100%] mt-[15px] cursor-pointer">
                    <h4 className="text-[14px]">Forget password? <span className="text-[#716DF2]">click here</span></h4>
                </div>
                <button className="w-[100%] h-[43px] bg-[#888DF2] rounded-[4px] flex justify-center items-center text-[#fff] mt-[25px]">
                    Sign In
                </button>
                <h4 className="mt-[10px]">Don't have an account? <span className="text-[#716DF2]">Sign up</span></h4>
            </form>
        </div>
    </div>
  )
  }

export default AdminLogin