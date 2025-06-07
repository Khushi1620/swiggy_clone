import FrontPageImage from "../../assets/FrontPageImage.avif";
export default function HeaderDineout() {
    return (
        <div className="relative w-[80%] mx-auto my-20">
            <img src={FrontPageImage} alt="" />
            <h1 className="text-white font-bold text-4xl absolute bottom-30 left-20">Explore Top Dining Out</h1>
            <h1 className="text-white text-4xl font-bold absolute bottom-19 left-20">Restaurant in Delhi</h1>
        </div>
    )
}