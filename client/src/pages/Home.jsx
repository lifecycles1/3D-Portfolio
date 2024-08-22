import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { cursorHand, cursorHandClicked, soundoff, soundon } from "../assets/icons";
import SocialLinks from "../components/SocialLinks";
import { DRAG_HINT_EXPIRY_DAYS, DRAG_HINT_SHOW_DURATION } from "../constants";
import Cookies from "js-cookie";

const DragHint = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastShownDate = Cookies.get("dragHintDate");
    const now = new Date();
    const expiryDate = new Date(lastShownDate);

    if (!lastShownDate || now - expiryDate > DRAG_HINT_EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        Cookies.set("dragHintDate", now.toISOString(), { expires: DRAG_HINT_EXPIRY_DAYS });
      }, DRAG_HINT_SHOW_DURATION);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    isVisible && (
      <div className="fixed right-[12%] top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ zIndex: 1000 }}>
        <div className="relative w-8 h-8">
          <img src={cursorHand} alt="Drag Hint" className="w-full h-full absolute animate-clickHoldDrag" />
          <img src={cursorHandClicked} alt="Drag Hint Clicked" className="w-full h-full absolute animate-clickHoldDragClicked" />
        </div>
        <div className="absolute left-1/2 -translate-x-[64%] translate-y-[10%] whitespace-nowrap text-sm">Click & Drag</div>
      </div>
    )
  );
};

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -7.5, -43]; // x = 0, y = -6.5, z = -43
    let rotation = [0.1, 4.7, 0]; // x = 0.1, y = 4.7, z = 0

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]; // x = 0.9, y = 0.9, z = 0.9
    } else {
      screenScale = [1, 1, 1]; // x = 1, y = 1, z = 1
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation = [0, 20, 0]; // x = 0, y = 20, z = 0

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-10 left-0 right-0 z-10 flex items-center justify-center">{currentStage && <HomeInfo currentStage={currentStage} />}</div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          {/* the sun  */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {/* This light globally illuminates all objects in the scene equally without casting shadows */}
          <ambientLight intensity={0.5} />
          {/* emits lights in all directions from a single point */}
          {/* in this case we don't need it, because we are outside - we have the sun and the ambientlight */}
          {/* <pointLight /> */}
          {/* similar to pointlight - emits light from one direction, but in shape of a cone (can provide an angle) */}
          {/* <spotLight /> */}
          {/* illuminates the scene with a gradient */}
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island position={islandPosition} scale={islandScale} rotation={islandRotation} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage} />
          <Plane position={planePosition} scale={planeScale} rotation={planeRotation} isRotating={isRotating} />
        </Suspense>
      </Canvas>
      <DragHint />
      <div className="absolute bottom-2 left-2">
        <img src={!isPlayingMusic ? soundoff : soundon} alt="sound" className="w-10 h-10 cursor-pointer object-contain" onClick={() => setIsPlayingMusic(!isPlayingMusic)} />
      </div>
      <div className="absolute bottom-2 right-2">
        <SocialLinks />
      </div>
    </section>
  );
};

export default Home;
