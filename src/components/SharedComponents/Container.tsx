type Props = {
  children: any;
};

const Container = (props: Props) => {
  return <div className="sm:w-4/5 sm:mx-auto border-b-2 border-gray-300 pb-24 w-fit mx-auto flex flex-wrap gap-7 justify-center mt-16">{props.children}</div>;
};

export default Container;
