import { useState } from "react";

const Icons = ({ icon, status, name }) => {
  return (
    <div className="w-[74px] flex flex-col items-center justify-center">
      <img src={icon} alt={"icon"} className="my-1" />
      <p className={`${status} text-nowrap`}>{name}</p>
    </div>
  );
};

const Tabbar = ({ num }) => {
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
                icon={"./StatusIcons/Type=Popular, State=Active.png"}
                status={"text-txt_accent_primary"}
                name={"Popular"}
              />
            ) : (
              <Icons
                icon={"./StatusIcons/Type=Popular, State=Default.png"}
                status={"text-txt_secondary"}
                name={"Popular"}
              />
            )}
          </div>
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => setStatus(1)}
          >
            {status == 1 ? (
              <Icons
                icon={"./StatusIcons/Type=Favorites, State=Active.png"}
                status={"text-txt_accent_primary"}
                name={"Favorites"}
              />
            ) : (
              <Icons
                icon={"./StatusIcons/Type=Favorites, State=Default.png"}
                status={"text-txt_secondary"}
                name={"Favorites"}
              />
            )}
          </div>
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => setSlip(!slip)}
          >
            <div className="relative">
              {!slip ? (
                <Icons
                  icon={"./StatusIcons/Type=Bet slip.png"}
                  status={"text-txt_secondary"}
                  name={"Bet slip"}
                />
              ) : (
                <Icons
                  icon={"./StatusIcons/Type=Close.png"}
                  status={"text-txt_accent_primary"}
                  name={"Bet slip"}
                />
              )}
              {num ? (
                <div className="absolute w-[18px] h-[18px] rounded-full text-txt_primary_inverse_light bottom-[25px] right-[5px] bg-status_danger border-solid border-[2px] border-globe flex justify-center items-center caption_medium12 p-1">
                  {num}
                </div>
              ) : null}
            </div>
          </div>
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => setStatus(2)}
          >
            {status == 2 ? (
              <Icons
                icon={"./StatusIcons/Type=History, State=Active.png"}
                status={"text-txt_accent_primary"}
                name={"History"}
              />
            ) : (
              <Icons
                icon={"./StatusIcons/Type=History, State=Default.png"}
                status={"text-txt_secondary"}
                name={"History"}
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
