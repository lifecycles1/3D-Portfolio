const Alert = ({ type, text }) => {
  return (
    // <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
    <div className="absolute bottom-16 right-40 flex justify-center items-center">
      <div role="alert" className={`p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center ${type === "danger" ? "bg-red-800" : "bg-blue-800"}`}>
        <p className={`flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs ${type === "danger" ? "bg-red-500" : "bg-blue-500"}`}>{type === "danger" ? "Failed" : "Success"}</p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
