import { toast } from "react-toastify";
import customFetch from "./CustomUrl";
import { redirect } from "react-router-dom";

export const loginAction = async ({request}) =>{
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try {
        await customFetch.post('/auth/login', data);
        toast.success('Logged in successful');
        if(data.customerId === "admin"){
            return redirect('/admin-dashboard')
        }
        return redirect('/dashboard');
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.msg);
        return error;
      }
  };

  export const orderAction = async ({request}) =>{
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    try {
        await customFetch.post('/order/make-order', data);
        console.log(data);
        toast.success('order placed successfully');
        return redirect('/dashboard');
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.msg);
        return error;
      }
  };