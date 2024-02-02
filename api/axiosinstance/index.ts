import axios, { AxiosResponse } from "axios";
import { baseUrl, baseUrlApi } from "../endpoints";
import { parseCookies } from "nookies";

export const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.request.use((config) => {
    const cookies = parseCookies();

    const token = cookies[process.env.NEXT_APP_TOKEN_NAME!];
    if (token && !!config.headers) {
        config.headers["x-access-token"] = `${token}`;
    }

    return config;
});

// axiosInstance.interceptors.response.use(
//     (res: AxiosResponse) => {
//         // only show success notification on this routes

//         if (sucessNotificationEndPoints.includes(res.config.url as string)) {
//             if (res?.data?.status !== 200) {
//                 globalCatchWarning(res);
//             } else {
//                 globalCatchSucess(res);
//             }
//         }

//         return res;
//     },
//     async (error: AxiosError<BaseApiResponse>) => {
//         globalCatchError(error);
//         return Promise.reject(error);
//     })