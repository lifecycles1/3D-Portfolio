import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  // const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.success) {
          showAlert({ show: true, text: data.message, type: "success" });
          setTimeout(() => {
            hideAlert();
            setCurrentAnimation("idle");
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        } else {
          showAlert({ show: true, text: data.message, type: "danger" });
          setCurrentAnimation("idle");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        showAlert({ show: true, text: "I didnt receive your message", type: "danger" });
        console.log("Error:", error);
      });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Name
            <input value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} type="text" name="name" className="input" placeholder="John" required />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} type="email" name="email" className="input" placeholder="john@gmail.com" required />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} name="message" rows={4} className="textarea" placeholder="Let me know how I can help you!" required />
          </label>
          <button type="submit" disabled={isLoading} className="btn" onFocus={handleFocus} onBlur={handleBlur}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox currentAnimation={currentAnimation} position={[0.5, 0.35, 0]} rotation={[12.6, -0.6, 0]} scale={[0.5, 0.5, 0.5]} />
          </Suspense>
        </Canvas>
      </div>
      {alert.show && <Alert {...alert} />}
    </section>
  );
};

export default Contact;
