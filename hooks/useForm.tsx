"use client";
import { useState } from "react";
// import emailjs from '@emailjs/browser';

type FormData = {
    [key: string]: string;
  };

type UseFormProps = {
    onSubmit?: (e: React.FormEvent) => void;
  };

  const useForm = ({ onSubmit }: UseFormProps) => {
    const [ formData, setFormData ] = useState<FormData>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>) => {
        // console.log(e.target.value);
        setFormData({...formData, [ e.target.name]: e.target.value });
        // console.log(formData);
    };

    const handleSubmit = (e:  React.FormEvent) => {
        // console.log("in hook");
        e.preventDefault();
        onSubmit && onSubmit(e);
    };

    const resetFields = () => {
        setFormData({});
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        resetFields
    };
};

export default useForm;