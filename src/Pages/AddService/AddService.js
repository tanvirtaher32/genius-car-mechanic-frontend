import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {


        axios.post('http://localhost:5000/services',data)
        .then(res => {
            if(res.data.insertedId){
                alert('data inserted successfully');
                reset();
            }

        })

        console.log(data)
    };
    return (
        <div className="add-service">
            <h2>Add Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 180 })} placeholder="name"/>
            <textarea {...register("description", )} placeholder="description"/>
            <input type="number" {...register("price", )} placeholder="price"/>
            <input {...register("img", )} placeholder="img url"/>
            <input type="submit" className="btn"/>
            </form>
        </div>
    );
};

export default AddService;