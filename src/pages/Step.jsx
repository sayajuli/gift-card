import { useEffect, useState } from "react";
import StepLayout from "../components/Layouts/StepLayout"
import Espresso from "../components/Fragments/Espresso";
import Tubruk from "../components/Fragments/Tubruk";
import StepMenu from "../components/Fragments/StepMenu";
import Prank from "../components/Fragments/Prank";
import Layout from "../components/Layouts/Layout";

const StepPage = () => {
  const [step, setStep] = useState('');
  const [IsLikeCoffee, setIsLikeCoffee] = useState('');

  useEffect(() => {
    const savedIsLikeCoffee = localStorage.getItem('isCoffee');
    if (savedIsLikeCoffee === "true") {
      setIsLikeCoffee(true);
    };

    if (savedIsLikeCoffee === "false") {
      setIsLikeCoffee(false);
    };
  }, [])

  useEffect(() => {
    const savedStep = localStorage.getItem('step');
    if (savedStep) {
      setStep(savedStep)
    };
  }, [])

  const handlerStepClick = (item) => {
    const itemValue = item.toLowerCase();
    setStep(itemValue);
    localStorage.setItem('step', itemValue);
  }

  if (step === 'espresso' && IsLikeCoffee === true) {
    return (
      <StepLayout step="Espresso" children={<Espresso />} />
    )
  } else if (step === 'tubruk' && IsLikeCoffee === true) {
    return (
      <StepLayout step="Tubruk" children={<Tubruk />} />
    )
  } else {
    {
      if (IsLikeCoffee === true) {
        return (
          <StepLayout step="Mau ditutorin yang mana dek?" children={<StepMenu onClickHandler={handlerStepClick} />} />
        )
      } else {
        return (
          <Layout children={<Prank />} />
        )
      }
    }
  }
}

export default StepPage;