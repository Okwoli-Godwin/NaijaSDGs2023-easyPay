import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
	return (
		<div className="absolute top-0 bg-[rgba(0,0,0,0.6)] h-[100%] w-[100%]text-[#fff] flex justify-center items-center backdrop-blur-5">
			<ClipLoader size={30} color='#fff' />
		</div>
	);
};

export default Loading;