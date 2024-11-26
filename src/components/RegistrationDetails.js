import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const registrationDetails = [
    {
        icon: "HiChatBubbleLeftRight",
        heading: "Get In Touch",
        details: "info@utrechtitconsulting.com",
    },
    {
        icon: "BiWorld",
        heading: "Visit Us",
        details: "Abu Dhabi, UAE",
    },
];

const RegistrationDetails = () => {
    return (
        <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 py-12 px-2 ">

            {registrationDetails.map((ele, i) => {
                let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
                return (
                    <div
                        className="flex flex-col gap-4 p-4 text-sm text-richblack-200"
                        key={i}
                    >
                        <div className="flex flex-row items-start gap-4">
                            {Icon && <Icon size={30} />}
                            <div className="flex flex-col">
                                <h1 className="text-xl font-semibold text-richblack-5">
                                    {ele.heading}
                                </h1>
                                <p className={`text-base font-semibold ${ele.icon === "BiWorld" ? "text-richblack-200" : "text-richblack-300"}`}>
                                    {ele.details}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RegistrationDetails;
