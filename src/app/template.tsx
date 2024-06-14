"use client";

import RankingIcon from "@/components/svgs/icons/RankingIcon/RankingIcon";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AltaLogo from "../components/svgs/alta/AltaLogo/AltaLogo";
import "./page.scss";

const AnimationTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
        {pathname !== "/ranking" && (
          <Link className="ranking-button" href={"/ranking"}>
            <RankingIcon />
          </Link>
        )}
        <Link
          className="alta-logo"
          href="https://cidadealtarp.com/"
          target="_blank"
        >
          <AltaLogo />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationTemplate;
