import { Link } from "react-router-dom";
type Props = {
  title: String;
  btnTitle: any;
  btnLink: any;
};

function SupTask(props: Props) {
  return (
    <div className="flex justify-around sm:gap-32 gap-0">
      <p className="sm:text-xl md:text-3xl">{props.title}</p>
      {props.btnTitle === "" ? (
        <Link
          to={props.btnLink}
          className="text-xl opacity-0 w-fit bg-gray-300 rounded py-0.5 px-5 border-r-2 border-yellow-400 hover:scale-90 transition-all duration-200"
        >
          {props.btnTitle}{" "}
        </Link>
      ) : (
        <Link
          to={props.btnLink}
          className="text-xl w-fit bg-gray-300 rounded py-0.5 px-5 border-r-2 border-yellow-400 hover:scale-90 transition-all duration-200"
        >
          {props.btnTitle}{" "}
        </Link>
      )}
    </div>
  );
}

export default SupTask;
