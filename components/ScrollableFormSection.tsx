'use client'
import { NamedInput, PasswordInput } from "./inputs";
import LoginButton from "./buttons/LoginButton";
import { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "@/app/firebase/config";


const ScrollableFormSection = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  
  const handleSubmit =  (e: { preventDefault: () => void; })=> {
    e.preventDefault()
    console.log(email,password)
    try {
       createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        console.log(userCredential.user)
      })
      setEmail('')
      setPassword("")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <section className='min-w-full h-full flex flex-col py-4 px-[2px] gap-6'>
        <NamedInput name='Email address' type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <NamedInput name='Country' />
        <PasswordInput type="password" name='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </section>
      <section className='min-w-full h-full flex flex-col py-4 px-[2px] gap-6'>
        <NamedInput name='Business name'  />
        <NamedInput name='City' />
        <NamedInput name='Contract Person Name'  />
        <NamedInput name='Phone Number'  />
        <LoginButton text='Create your account' 
        handleSubmit={handleSubmit}
        />
      </section>
    </>
  );
};

export default ScrollableFormSection;
