'use client'
import { NamedInput, PasswordInput } from "./inputs";
import LoginButton from "./buttons/LoginButton";
import { useState } from "react";

const ScrollableFormSection = () => {
  const [userDetail, setUserDetail] = useState({
    email:'',
    password: '',
    country: '',
    businessName: '',
    city: '',
    name: '',
    phone: ''


  })
  return (
    <>
      <section className='min-w-full h-full flex flex-col py-4 px-[2px] gap-6'>
        <NamedInput name='Email address' value={userDetail.email} onChange={(e)=> setUserDetail({...userDetail, email: e.target.value})} />
        <NamedInput name='Country' value={userDetail.country} onChange={(e)=> setUserDetail({...userDetail, country: e.target.value})}/>
        <PasswordInput name='Password' value={userDetail.password} onChange={(e)=> setUserDetail({...userDetail, password: e.target.value})} />
        <PasswordInput name='Confirm Password' value={userDetail.password} onChange={(e)=> setUserDetail({...userDetail, password: e.target.value})} />
      </section>
      <section className='min-w-full h-full flex flex-col py-4 px-[2px] gap-6'>
        <NamedInput name='Business name' value={userDetail.businessName} onChange={(e)=> setUserDetail({...userDetail, businessName: e.target.value})} />
        <NamedInput name='City' value={userDetail.city} onChange={(e)=> setUserDetail({...userDetail, city: e.target.value})} />
        <NamedInput name='Contract Person Name' value={userDetail.name} onChange={(e)=> setUserDetail({...userDetail, name: e.target.value})} />
        <NamedInput name='Phone Number' value={userDetail.phone} onChange={(e)=> setUserDetail({...userDetail, phone: e.target.value})} />
        <LoginButton text='Create your account' 
        handleSubmit={()=>console.log('Hello Chief')}
        />
      </section>
    </>
  );
};

export default ScrollableFormSection;
