// lib/syntaxHighlight.ts
import { createLowlight } from "lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import python from "highlight.js/lib/languages/python";
import java_ from "highlight.js/lib/languages/java"; // 'java' is reserved
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import xml from "highlight.js/lib/languages/xml"; // For HTML

// --- Import a theme globally ---
import "highlight.js/styles/atom-one-dark.css";

// Create lowlight instance
const lowlight = createLowlight();

// Register languages
lowlight.register("javascript", javascript);
lowlight.register("typescript", typescript);
lowlight.register("css", css);
lowlight.register("python", python);
lowlight.register("java", java_);
lowlight.register("bash", bash);
lowlight.register("json", json);
lowlight.register("html", xml);

export default lowlight;
