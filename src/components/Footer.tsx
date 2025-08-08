"use client";

import {
  Text,
  Column,
  Row,
} from "@once-ui-system/core";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <Column 
      fillWidth 
      paddingX="l" 
      paddingY="m" 
      style={{ 
        marginTop: "auto",
        position: "relative"
      }}
    >
      <Row fillWidth horizontal="between" vertical="center">
        {/* Left side - Brand info */}
        <Row gap="s" align="center">
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Crafted with 💌 by <a href="https://aryantechie.com" style={{ textDecoration: "none", color: "inherit", fontWeight: "500" }} onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "underline"} onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "none"}>ARYAN TECHIE</a>
          </Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">•</Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            <a href="https://aroice.in" style={{ textDecoration: "none", color: "inherit" }} onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "underline"} onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "none"}>AROICE</a>
          </Text>
        </Row>

        {/* Right side - Social links */}
        <Row gap="m" align="center">
            <Text variant="body-default-xs" onBackground="neutral-weak">
            <a href="https://aryantechie.com/work/argon" style={{ textDecoration: "none", color: "inherit" }} onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "underline"} onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "none"}>Case Study</a>
            </Text>

            <Text variant="body-default-xs" onBackground="neutral-weak">
            <a href="https://github.com/aryan-techie/" style={{ textDecoration: "none", color: "inherit" }} onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "underline"} onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "none"}>GitHub</a>
            </Text>

            <Text variant="body-default-xs" onBackground="neutral-weak">
            <a href="https://ie.linkedin.com/in/aryantechie" style={{ textDecoration: "none", color: "inherit" }} onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "underline"} onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "none"}>LinkedIn</a>
            </Text>

            <Text variant="body-default-xs" onBackground="neutral-weak">
            <a href="https://instagram.com/aryantechie" style={{ textDecoration: "none", color: "inherit" }} onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "underline"} onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "none"}>Instagram</a>
            </Text>
    
            <Text variant="body-default-xs" onBackground="neutral-weak">
            <a href="mailto:aryan@aroice.in" style={{ textDecoration: "none", color: "inherit" }} onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "underline"} onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.textDecoration = "none"}>Contact Me</a>
            </Text>
        </Row>
      </Row>
    </Column>
  );
}
