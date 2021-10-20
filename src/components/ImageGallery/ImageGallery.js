// import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// import s from "./ImageGallery.module.css";
// export default function ImageGallery({ search, openModal }) {
//   return (
//     <div>
//       <ul className={s.imageGallery}>
//         {search &&
//           search.map((item) => (
//             <ImageGalleryItem
//               key={item.id}
//               webformatURL={item.webformatURL}
//               tags={item.webformatURL}
//               openModal={openModal}
//               largeImageURL={item.largeImageURL}
//             />
//           ))}
//       </ul>
//     </div>
//   );
// }

import PropTypes from "prop-types";

import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ search, openModal }) => {
  return (
    <>
      <ul className={s.imageGallery}>
        {search &&
          search.map((item) => (
            <ImageGalleryItem
              key={item.id}
              webformatURL={item.webformatURL}
              tags={item.webformatURL}
              openModal={openModal}
              largeImageURL={item.largeImageURL}
            />
          ))}
      </ul>
    </>
  );
};

export default ImageGallery;
ImageGallery.propTypes = {
  openModal: PropTypes.func,
  search: PropTypes.array,
};
