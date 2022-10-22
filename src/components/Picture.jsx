const Picture = ({ img, ext, alt }) => {
  return (
    <picture>
      <source
        srcset={`/img/${img}.webp`}
        type="image/webp"
        media="(min-width: 1024px)"
        width={'1024px'}
        height={'auto'}
      />
      <source
        srcset={`/img/${img}.${ext}`}
        type={`image/${ext}`}
        media="(min-width: 1024px)"
        width={'1024px'}
        height={'auto'}
      />
      <source
        srcset={`/img/${img}-m.webp`}
        type="image/webp"
        media="(max-width:1024px)"
        width={'768px'}
        height={'auto'}
      />
      <source
        srcset={`/img/${img}-m.${ext}`}
        type={`image/${ext}`}
        media="(maz-width:1024px)"
        width={'768px'}
        height={'auto'}
      />
      <source
        srcset={`/img/${img}-s.webp`}
        type="image/webp"
        media="(max-width:768px)"
        width={'768px'}
        height={'auto'}
      />
      <source
        srcset={`/img/${img}-s.${ext}`}
        type={`image/${ext}`}
        media="(maz-width:768px)"
        width={'768px'}
        height={'auto'}
      />
      <img src={`/img/${img}.${ext}`} alt={alt} width="auto" height="auto" />
    </picture>
  );
};

export default Picture;
