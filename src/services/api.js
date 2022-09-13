import axios from "axios";

export const BDApi = axios.create({
  baseURL: "https://git.heroku.com/bdtd-joao-zaqueu.git/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// adiciona o header de authorization em todas as requisições
BDApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("@COMPILE:token");
  if (!config.headers) return config;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
