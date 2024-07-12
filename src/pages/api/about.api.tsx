import axiosInstance from "./config";

export const getAboutData = async () => {
  const responseTemp = await axiosInstance.get(
    `/api/v2/pages/?type=home.AboutPage`
  );
  const id =
    responseTemp.data.items[0].meta.detail_url.split("api/v2/pages/")[1];
  const response = await axiosInstance.get(`/api/v2/pages/${id}`);

  return response;
};
