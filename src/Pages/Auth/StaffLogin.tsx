import img from "../../assets/adminsignupimg.png"
import img2 from "../../assets/pay.png"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UseAppDispatch } from "../../Components/Global/Store";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { loginClient } from "../../Components/Api/StaffEndpoint";
import { registerClient } from "../../Components/Global/ReduxState";
import { useNavigate } from "react-router-dom";

const StaffLogin = () => {
    const dispatch = UseAppDispatch();

    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string().email().required(),
      password: yup.string().required(),
      companyname: yup.string().required("field must be required"),
    })
        .required()
    
    type formData = yup.InferType<typeof schema>;

    const {
    handleSubmit,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });
    
     const signin = useMutation({
    mutationFn: loginClient,
    mutationKey: ["loginClients"],

    onSuccess: (myData) => {
      dispatch(registerClient(myData.data));
      Swal.fire({
        title: "login",
        html: "redirecting to dashboard",
        timer: 2000,
        timerProgressBar: true,


        willClose: () => {
          navigate("/staffdashboard");
        },
      });

    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! .....email or password  incorrect",
        //  footer: '<a href="">Why do I have this issue?</a>',
      });
    },
  });

  const Submit = handleSubmit((data) => {
    signin.mutate(data);
    // console.log(`this is yup signin`, data);
    // reset();

    
  });
    


  return (
    <div className="w-[100%] flex justify-center">
        <div className="w-[100%] flex">
            <div className="w-[50%] h-[100%] border border-l">
                <img src={img} alt="" />
            </div>
            
            <form onSubmit={Submit} className="w-[50%] flex flex-col items-center pl-[40px] pr-[40px] pt-[40px] pb-[13px]">
                <img src={img2} alt="" className="w-[120px] "/>
                
                <h3 className="text-[25px] mt-[30px]">
                    Business Payments Made Simple.
                </h3>
                <p className="w-[480px] text-center mt-[20px]">Get a unique bank account number that  enables your company to pay   employees' salaries through the wallet.</p>
                
                <div className="w-[100%] flex flex-col mt-[40px]">
                    <h3>Company's Name</h3>
                    <input {...register("companyname")} type="text" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] outline-none border border-gray-300" placeholder="my company"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Email</h3>
                    <input {...register("email")} type="email" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="myemil@gmail.com"/>
                </div>
                <div className="w-[100%] flex flex-col mt-[20px]">
                    <h3>Password</h3>
                    <input type="password" className="w-[100%] h-[43px] rounded-[3px] mt-[5px] pl-[12px] border border-gray-300 outline-none" placeholder="password"/>
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

export default StaffLogin