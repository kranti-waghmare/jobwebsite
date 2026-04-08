import axios from "axios";

const API = "http://localhost:5000/api/users"

export const createUser = (data) => axios.post(API,data);
export const getUsers = () => axios.get(API);
export const updateUser = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API}/${id}`);