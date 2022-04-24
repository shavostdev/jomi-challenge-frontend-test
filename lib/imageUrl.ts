const urlBuilder = (src: String) => {
  const fullUrl = process.env.STRAPI_CMS_URL + src;
  return fullUrl;
};

export default urlBuilder;
