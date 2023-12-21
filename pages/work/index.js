// Import
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/60">
      <div className="h-screen  bg-gradient-to-r from-black/30 via-black/50 to-black/60 py-32 text-center xl:text-left flex items-center justify-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col items-center xl:flex-row gap-x-8">
            {/* Text */}
            <div
              // style={{ width: "400px !important" }}
              className="text-center flex  flex-col lg:text-left mb-16 xl:mb-0"
            >
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-8"
              >
                My work<span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                I have expertise in work of many IT Fields
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-[60%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </div>
  );
};

export default Work;
