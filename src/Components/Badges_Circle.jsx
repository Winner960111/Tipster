
const Rect = ({content}) => {
  return (
    <div className="w-[18px] h-[18px] p-1 bg-status_danger rounded-full border-solid border-globe border-[2px] flex justify-center items-center">
      <p className="caption_medium12 text-white">{content}</p>
    </div>
  );
}
export default Rect;
