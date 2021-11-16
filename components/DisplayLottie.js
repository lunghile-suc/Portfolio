import Lottie from "react-lottie";

const DisplayLottie = ({lotti}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lotti,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };
    return ( 
        <div>
            <Lottie options={defaultOptions}/>
        </div>
     );
}
 
export default DisplayLottie;