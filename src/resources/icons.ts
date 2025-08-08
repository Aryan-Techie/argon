import { IconType } from "react-icons";

import {
  HiOutlineRocketLaunch,
  HiOutlineQuestionMarkCircle,
  HiOutlineGlobeAlt,
  HiOutlineLifebuoy,
  HiOutlineShieldCheck,
  HiOutlineKey,
  HiOutlineInformationCircle,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineHeart,
  HiOutlineChartBarSquare,
  HiOutlineNoSymbol,
  HiOutlineWindow,
  HiOutlineServerStack,
  HiOutlineQrCode,
} from "react-icons/hi2";

import {
  FaGithub,
  FaChrome,
  FaBug,
} from "react-icons/fa";

import { FaWandMagicSparkles, FaEnvelope, FaFileContract,} from "react-icons/fa6";

import { IoMdContact } from "react-icons/io";
import { LuCodesandbox } from "react-icons/lu";

import { MdFeedback } from "react-icons/md";

export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  github: FaGithub,
  chrome: FaChrome,
  mail: FaEnvelope,
  question: HiOutlineQuestionMarkCircle,
  globe: HiOutlineGlobeAlt,
  help: HiOutlineLifebuoy,
  shield: HiOutlineShieldCheck,
  key: HiOutlineKey,
  info: HiOutlineInformationCircle,
  check: HiOutlineCheckCircle,
  clock: HiOutlineClock,
  heart: HiOutlineHeart,
  chart: HiOutlineChartBarSquare,
  ban: HiOutlineNoSymbol,
  window: HiOutlineWindow,
  storage: HiOutlineServerStack,
  code: HiOutlineQrCode,
  infinity: FaWandMagicSparkles,
  contract: FaFileContract,
  contact: IoMdContact,
  scripting: LuCodesandbox,
  bug: FaBug,
  feedback: MdFeedback,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;