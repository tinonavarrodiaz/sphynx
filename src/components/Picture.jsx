const Picture = ({ img, ext, alt }) => {
  return (
    <picture>
      <source
        srcset={`/img/${img}.webp`}
        type="image/webp"
        media="(min-width: 1024px)"
      />
      <source
        srcset={`/img/${img}.${ext}`}
        type={`image/${ext}`}
        media="(min-width: 1024px)"
      />
      <source
        srcset={`/img/${img}-m.webp`}
        type="image/webp"
        media="(max-width:1024px)"
      />
      <source
        srcset={`/img/${img}-m.${ext}`}
        type={`image/${ext}`}
        media="(maz-width:1024px)"
      />
      <source
        srcset={`/img/${img}-s.webp`}
        type="image/webp"
        media="(max-width:768px)"
      />
      <source
        srcset={`/img/${img}-s.${ext}`}
        type={`image/${ext}`}
        media="(maz-width:768px)"
      />
      <img src={`/img/${img}.${ext}`} alt={alt} />
    </picture>
  );
};

export default Picture;
