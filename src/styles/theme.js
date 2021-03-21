const size = {
  mobile: "768px",
  laptop: "1200px"
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
  laptop: `(min-width: ${size.laptop})`
};

const theme = {
  device
};

export default theme;
