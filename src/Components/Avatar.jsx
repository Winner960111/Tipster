import { useState, useEffect } from "react";

const Avatar = ({ status, size, type, content }) => {
  const [initCharacter, setInitCharacter] = useState("");
  const [initSize, setInitSize] = useState(8);
  const [statusSize, setStatusSize] = useState(4);

  useEffect(() => {
    if (type === "text") {
      setInitCharacter(content[0]);
    }

    switch (size) {
      case 16:
        setInitSize(8);
        setStatusSize(4);
        break;
      case 20:
        setInitSize(11);
        setStatusSize(6);
        break;
      case 24:
        setInitSize(11);
        setStatusSize(6);
        break;
      case 32:
        setInitSize(14);
        setStatusSize(8);
        break;
      case 40:
        setInitSize(16);
        setStatusSize(10);
        break;
      case 56:
        setInitSize(20);
        setStatusSize(14);
        break;
      case 64:
        setInitSize(24);
        setStatusSize(16);
        break;
      default:
        console.log("Unsupported size:", size);
        break;
    }
  }, [size, type, content]);

  return (
    <>
      {type === "text" ? (
        <div className="relative">
          <div
            className="flex rounded-full items-center justify-center bg-coloured text-txt_primary"
            style={{
              fontSize: `${initSize}px`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            {initCharacter}
          </div>
          {status == "none" ? null : (
            <div
              className={`${
                status == "online" ? "bg-status_success" : "bg-status_danger"
              } absolute bottom-0 right-0 rounded-full border-solid border-globe border-[1.5px]`}
              style={{
                width: `${statusSize}px`,
                height: `${statusSize}px`,
              }}
            ></div>
          )}
        </div>
      ) : type === "avatar" ? (
        <div className="relative">
          <img
            src="./Avatars/Type=Image.png" //input avatar URL
            className="flex rounded-full border-solid border-globe border-[1px]"
            style={{
              fontSize: `${initSize}px`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
          {status == "none" ? null : (
            <div
              className={`${
                status == "online" ? "bg-status_success" : "bg-status_danger"
              } absolute bottom-0 right-0 rounded-full border-solid border-globe border-[1.5px]`}
              style={{
                width: `${statusSize}px`,
                height: `${statusSize}px`,
              }}
            ></div>
          )}
        </div>
      ) : <div className="relative">
      <img
        src="https://s3-alpha-sig.figma.com/img/2627/f271/502b9934b0894a0dfac800f64557ae82?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WS~Xw1BwYPBhjexU5aOP8Yo7FQKwgcwl8QRgly6VQmVSmpKb~lwwG6oDAHA2Fnc-rJQ0~~kzmBCUJkFpgGCvu5pDbYoPhrlDh0NKRUYlFackrgsQ407FlN~sFNFIu3DaK~bXM6yF~3IG8SdFKjIqofyVuLWxGPZxzjVyxYYCbRDmtCFGFuNfOwpKt~SqaycXHQovFl8F6iet4AOgOnBLylzzfHVIsI8KSkTbZqrHAOUI-eZuyMsgpSLjHIqrFLhNi9A8PjUHmEbVaRrw3Y3fVpndbM2MsyoVUmeODpQ59fcTghlLAPFc04N~JT5YFiOYC0GOBlLw2N1F~e1I~HfnTA__" //input avatar URL
        className="flex rounded-full"
        style={{
          fontSize: `${initSize}px`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
      {status == "none" ? null : (
        <div
          className={`${
            status == "online" ? "bg-status_success" : "bg-status_danger"
          } absolute bottom-0 right-0 rounded-full border-solid border-globe border-[1.5px]`}
          style={{
            width: `${statusSize}px`,
            height: `${statusSize}px`,
          }}
        ></div>
      )}
    </div>}
    </>
  );
};

export default Avatar;
