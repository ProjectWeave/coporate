import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ImagesZoom from './ImagesZoom';

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);
  // console.log("이미지배열", images);
  // 이미지 배열속성 src
  var idxImg = images.map((j)=>
          ( j.src )
      );

  // 이미지가 없을 때
  if (images.length === 0 ){
      return false;
  }
  // 이미지가 하나일때
    if (images.length === 1) {
      return (
        <>
          <img src={`http://localhost:3065/${idxImg}`} onClick={onZoom} />
          {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
      );
    }
// 이미지가 두개일때
  if (images.length === 2) {
    return (
      <>
        <div>
          <img src={`http://localhost:3065/${idxImg[0]}`} width="50%" onClick={onZoom} />
          <img src={`http://localhost:3065/${idxImg[1]}`} width="50%" onClick={onZoom} />
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
  );
  }
   // 이미지가 세개이상일때
  return (
    <>
    <div>
      <img src={`http://localhost:3065/${idxImg[0]}`} width="50%" onClick={onZoom} />
      <div style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }} onClick={onZoom}>
        <button> + </button>
        <br />
        {images.length - 1} 개의 사진 더보기
      </div>
    </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
};

export default PostImages;

// PropTypes.shape : object 구체화