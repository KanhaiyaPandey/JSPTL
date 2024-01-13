import { redirect } from "react-router-dom";
import customFetch from "./CustomUrl";

export const dashboardLoader = async () =>{
    try {
      const {data} = await customFetch.get("/order/all-orders");
      return data;
    } catch (error) {
     return redirect("/");
    }
 }