import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import IsLikeCoffee from "../components/Fragments/IsLikeCoffee";
import IsNotLikeCoffee from "../components/Fragments/IsNotLikeCoffee";
import Question from "../components/Fragments/Question";
import DashboardLayout from "../components/Layouts/DahboardLayout";
import Modal from "../components/Fragments/Modal";

const DashboardPage = () => {
  const [isCoffee, setIsCoffee] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const guestName = localStorage.getItem('guestName');
    if (!guestName) {
      setShowModal(true);
    }
  }, [])

  useEffect(() => {
    const coffee = setIsCoffee(localStorage.getItem("isCoffee"));
    if (coffee === "true") {
      setIsCoffee(true);
    }

    if (coffee === "false") {
      setIsCoffee(false);
    }
  }, [])

  useEffect(() => {
    const step = localStorage.getItem('step');
    if (step) {
      localStorage.setItem('step', '');
    }
  }, [])

  useEffect(() => {
    if (isCoffee !== null) {
      localStorage.setItem("isCoffee", isCoffee);
    }
  }, [isCoffee])

  if (isCoffee === true) {
    return (
      <DashboardLayout>
        <IsLikeCoffee />
      </DashboardLayout>
    )
  } else if (isCoffee === false) {
    return (
      <DashboardLayout>
        <IsNotLikeCoffee />
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      {showModal && createPortal (
        <Modal onClose={() => setShowModal(false)} />,
        document.body
      )}
      <Question setIsCoffee={setIsCoffee} />
    </DashboardLayout>
  )
}

export default DashboardPage;