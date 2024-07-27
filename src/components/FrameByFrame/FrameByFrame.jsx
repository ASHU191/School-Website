import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Img1 from '../../assets/Home/FrameByFrame/Img1.png'
import Img2 from '../../assets/Home/FrameByFrame/Img2.png'
import Img3 from '../../assets/Home/FrameByFrame/Img3.png'
import Img4 from '../../assets/Home/FrameByFrame/Img4.png'
import Img5 from '../../assets/Home/FrameByFrame/Img5.png'
import Img6 from '../../assets/Home/FrameByFrame/Img6.png'
import Img7 from '../../assets/Home/FrameByFrame/Img7.png'
import Img8 from '../../assets/Home/FrameByFrame/Img8.png'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList className='w-full'
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 3}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Img1,
    title: 'Breakfast',
    rows: 3,
    cols: 1,
  },
  {
    img: Img2,
    title: 'Burger',
    rows: 2,
    cols: 2,
  },
  {
    img: Img3,
    title: 'Camera',
    rows: 2,
    cols: 1,
  },
  {
    img: Img5,
    title: 'Coffee',
    rows: 5,
    cols: 2,
  },
  {
    img: Img6,
    title: 'Basketball',
    rows: 3,
    cols: 1,
  },
  {
    img: Img4,
    title: 'Fern',
    rows: 4,
    cols: 1,
  },
  {
    img: Img8,
    title: 'Fern',
    rows: 4,
    cols: 1,
  },
  {
    img: Img7,
    title: 'Fern',
    rows: 2,
    cols: 3,
  },
];
