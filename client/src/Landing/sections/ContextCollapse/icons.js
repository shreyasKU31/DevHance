/**
 * @file icons.js
 * @description Brand icon data for the ContextCollapse section.
 * @module ContextCollapseIcons
 */
import {
  FigmaLogoIcon,
  GitHubLogoIcon,
  NotionLogoIcon,
  CodeSandboxLogoIcon,
  FramerLogoIcon,
} from "@radix-ui/react-icons";

/**
 * Array of brand icon objects for floating display.
 * @type {Array<Object>}
 */
const icons = [
  {
    Icon: GitHubLogoIcon,
    color: "#FFFFFF",
    position: { top: "15%", right: "15%" },
  },
  {
    Icon: FigmaLogoIcon,
    color: "#F24E1E",
    position: { top: "40%", right: "10%" },
  },
  {
    Icon: CodeSandboxLogoIcon,
    color: "#FF0000",
    position: { bottom: "45%", right: "20%" },
  },
  {
    Icon: FramerLogoIcon,
    color: "#fc44e7",
    position: { bottom: "15%", right: "12%" },
  },
  {
    Icon: NotionLogoIcon,
    color: "#FFFFFF",
    position: { top: "60%", right: "25%" },
  },
];

export default icons;
