"use client";
import { useRouter } from "next/navigation";
import BaseButton, { BaseButtonProps } from "./BaseButton";

type StartFreeButtonProps = {
  text?: string;
} & BaseButtonProps

const StartFreeButton = ({text, ...rest}: StartFreeButtonProps = {}) => {
  const router = useRouter();
  return (
    <BaseButton {...rest} onClick={() => router.push("/sign-up")}>{text || 'Start free'}</BaseButton>
  );
};

export default StartFreeButton;
