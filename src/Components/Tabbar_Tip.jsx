import { useState } from "react";

const Icons = ({ icon, status, name }) => {
  return (
    <div className="w-[74px] flex flex-col items-center justify-center">
      <img src={icon} alt={"icon"} className="my-1" />
      <p className={`${status} text-nowrap`}>{name}</p>
    </div>
  );
};

const Tabbar = () => {
  const [status, setStatus] = useState(0);
  const [slip, setSlip] = useState(false);

  return (
    <>
      <div className="w-full max-w-[768px] flex flex-col items-center bg-globe">
        <div className="w-full h-[60px] flex px-1 justify-around items-end">
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => setStatus(0)}
          >
            {status == 0 ? (
              <Icons
                icon={"./StatusIcons/Type=Home, State=Active.png"}
                status={"text-txt_accent_primary"}
                name={"Home"}
              />
            ) : (
              <Icons
                icon={"./StatusIcons/Type=Home, State=Default.png"}
                status={"text-txt_secondary"}
                name={"Home"}
              />
            )}
          </div>
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => setStatus(1)}
          >
            {status == 1 ? (
              <Icons
                icon={"./StatusIcons/Type=Discovery, State=Active.png"}
                status={"text-txt_accent_primary"}
                name={"Discovery"}
              />
            ) : (
              <Icons
                icon={"./StatusIcons/Type=Discovery, State=Default.png"}
                status={"text-txt_secondary"}
                name={"Discovery"}
              />
            )}
          </div>
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => setSlip(!slip)}
          >
            <div className="relative">
              <Icons
                icon={"./StatusIcons/Type=Add.png"}
                status={"text-txt_secondary"}
                name={"Add tip"}
              />
            </div>
          </div>
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => setStatus(2)}
          >
            {status == 2 ? (
              <Icons
                icon={"./StatusIcons/Type=Competitions, State=Active.png"}
                status={"text-txt_accent_primary"}
                name={"Competitions"}
              />
            ) : (
              <Icons
                icon={"./StatusIcons/Type=Competitions, State=Default.png"}
                status={"text-txt_secondary"}
                name={"Competitions"}
              />
            )}
          </div>
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => setStatus(3)}
          >
            {status == 3 ? (
              <Icons
                icon={"./StatusIcons/Type=Profile, State=Active.png"}
                status={"text-txt_accent_primary"}
                name={"Profile"}
              />
            ) : (
              <Icons
                icon={"./StatusIcons/Type=Profile, State=Default.png"}
                status={"text-txt_secondary"}
                name={"Profile"}
              />
            )}
          </div>
        </div>
        <div className="w-full h-[34px] px-1 max-w-[768px] flex justify-center items-end bg-globe">
          <div className="w-[134px] h-[4px] flex bg-icon_secondary rounded-full mb-2"></div>
        </div>
      </div>
    </>
  );
};
export default Tabbar;
