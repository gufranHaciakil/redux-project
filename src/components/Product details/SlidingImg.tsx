import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

type Props = {};

function SlidingImg(prop: Props) {
  const images = [
    {
      original: require("../../img/product1.jpg"),
    },
    {
      original: require("../../img/product2.jpg"),
    },
    {
      original: require("../../img/product3.jpg"),
    },
  ];

  return (
    <div className=" w-[100%] mx-auto px-2 mt-4">
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}

export default SlidingImg;
