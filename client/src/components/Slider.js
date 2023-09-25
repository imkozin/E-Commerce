import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const Slider = () => {
    const arrowStyle =
      'rounded-full bg-orange-200 flex justify-center items-center shadow-sm cursor-pointer';

    return (
      <div className="parentDiv h-[640px] bg-white flex items-center justify-between">
        <div className={arrowStyle}>
          <ArrowLeftOutlined style={{ fontSize: '50px' }} />
        </div>
        <div className="wrapper flex w-[100%] items-center justify-center h-[500px] shadow-2xl rounded-lg border-orange-200 border-10px overflow-hidden relative">
            <div className="slide flex items-center justify-center h-[100%] ">
                <div className="forImage">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
        <div className={arrowStyle}>
          <ArrowRightOutlined style={{ fontSize: '50px' }} />
        </div>
      </div>
    )
}

export default Slider;