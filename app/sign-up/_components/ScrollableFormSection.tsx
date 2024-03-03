"use client";
import { auth, database } from "@/app/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { LoginButton } from "@/components/buttons";
import { NamedInput, PasswordInput } from "@/components/inputs";

const ScrollableFormSection = () => {
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
    country: "",
    busineness_name: "",
    city: "",
    contact_name: "",
    phone_number: "",
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const additionalDetail = {
        country: userDetail.country,
        business_name: userDetail.busineness_name,
        city: userDetail.city,
        contact_name: userDetail.contact_name,
        phone_number: userDetail.phone_number,
      };
      const databaseRef = collection(database, "userDetail");
      createUserWithEmailAndPassword(
        auth,
        userDetail.email,
        userDetail.password
      )
        .then(() => {
          addDoc(databaseRef, {
            additionalDetail,
          });
        })
        .then(() => alert("Successfully submitted"))
        .then(() => {
          setUserDetail({
            email: "",
            password: "",
            country: "",
            busineness_name: "",
            city: "",
            contact_name: "",
            phone_number: "",
          });
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section className='min-w-full h-full flex flex-col py-4 px-[2px] gap-6'>
        <NamedInput
          name='Email address'
          type='email'
          value={userDetail.email}
          onChange={(e) =>
            setUserDetail({ ...userDetail, email: e.target.value })
          }
        />
        <NamedInput
          name='Country'
          value={userDetail.country}
          onChange={(e) =>
            setUserDetail({ ...userDetail, country: e.target.value })
          }
        />
        <PasswordInput
          type='password'
          name='Password'
          value={userDetail.password}
          onChange={(e) =>
            setUserDetail({ ...userDetail, password: e.target.value })
          }
        />
        <PasswordInput
          type='password'
          name='Confirm Password'
          value={userDetail.password}
          onChange={(e) =>
            setUserDetail({ ...userDetail, password: e.target.value })
          }
        />
      </section>
      <section className='min-w-full h-full flex flex-col py-4 px-[2px] gap-6'>
        <NamedInput
          name='Business name'
          value={userDetail.busineness_name}
          onChange={(e) =>
            setUserDetail({ ...userDetail, busineness_name: e.target.value })
          }
        />
        <NamedInput
          name='City'
          value={userDetail.city}
          onChange={(e) =>
            setUserDetail({ ...userDetail, city: e.target.value })
          }
        />
        <NamedInput
          name='Contract Person Name'
          value={userDetail.contact_name}
          onChange={(e) =>
            setUserDetail({ ...userDetail, contact_name: e.target.value })
          }
        />
        <NamedInput
          name='Phone Number'
          value={userDetail.phone_number}
          onChange={(e) =>
            setUserDetail({ ...userDetail, phone_number: e.target.value })
          }
        />
        <LoginButton
          text='Create your account'
          handleSubmit={handleSubmit}
        />
      </section>
    </>
  );
};

export default ScrollableFormSection;
