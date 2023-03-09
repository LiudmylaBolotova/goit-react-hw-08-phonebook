import PropTypes from 'prop-types';

const Image = (src, alt, width, height, ...attrs) => {
    // if (!src) {
    //     src = `https://via.placeholder.com/${width}x${height}`;
    // }
    return (
      <img
        src={''}
        alt={alt}
        width={width}
        height={height}
        {...attrs}
      />
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
height: PropTypes.number,
};

Image.defaultProps = {
    src: 'https://via.placeholder.com/100x100',
    alt: 'image name',
    width: 100,
    height: 100,
}

export default Image;
