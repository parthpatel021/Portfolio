import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from "../styles";
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const fromref = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send( 
            'service_vbyfb6p', 
            'template_ogq8aw6', 
            {
                from: form.name,
                to: 'Parth',
                from_email: form.email,
                to_email: 'parthkumar18216017@gmail.com',
                message: form.message,
            },
            'uEKc5BRDzSgRHQq4_'
        )
        .then(() => {
            setLoading(false);
            toast.success('Thank you i will get back to you as soon as possible.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setForm({
                name: '',
                email: '',
                message: '',
            })
        }, (err) => {
            setLoading(false);
            console.log(err);
            toast.error('Something went wrong.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
    } 

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
        <motion.div
            variants={slideIn('left', "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
            <p className={styles.sectionSubText}>
                Get In touch
            </p>
            <h3 className={styles.sectionHeadText}>
                Contact.
            </h3>

            <form
                ref={fromref}
                onSubmit={handleSubmit}
                className='mt-12 flex flex-col gap-8'
            >
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>
                        Your Name
                    </span>
                    <input 
                        type="text" 
                        name="name" 
                        value={form.name} 
                        onChange={handleChange}
                        placeholder="whats's your name?"
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>
                        Your Email
                    </span>
                    <input 
                        type="email" 
                        name="email" 
                        value={form.email} 
                        onChange={handleChange}
                        placeholder="whats's your email?"
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>
                        Your Message
                    </span>
                    <textarea
                        rows="7" 
                        name="message" 
                        value={form.message} 
                        onChange={handleChange}
                        placeholder="what do you want to say?"
                        className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                    />
                </label>

                <button
                    type='submit'
                    className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
                >
                    {loading ? 'Sending...': 'Send'}
                </button>
            </form>
        </motion.div>

        <motion.div 
            variants={slideIn('right', "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
            <EarthCanvas />
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");