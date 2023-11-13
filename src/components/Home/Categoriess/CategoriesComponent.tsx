type Props = {
  src: any;
  title: String;
};

const CategoriesComponent = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <img
        data-tooltip-target="tooltip-jese"
        className="w-32 h-32 rounded border-l-2 border-gray-300"
        src={props.src}
        alt="Medium avatar"
      />
      {true ? <p>{props.title}</p> : null}
    </div>
  );
};

export default CategoriesComponent;
