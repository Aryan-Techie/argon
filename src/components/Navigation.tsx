"use client";

import {
  Text,
  Flex,
  Column,
  ToggleButton,
  Line,
  NavIcon,
} from "@once-ui-system/core";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Navigation Header */}
      <Flex 
        position="fixed"
        top="0"
        left="0"
        right="0"
        paddingX="l" 
        paddingY="s" 
        horizontal="between" 
        vertical="center"
        style={{ 
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <Text variant="label-default-s" onBackground="neutral-weak">
          <a 
            href="/"
            style={{ 
              textDecoration: "none", 
              color: "inherit", 
              display: "flex", 
              alignItems: "center", 
              gap: "8px",
              fontSize: "16px"
            }}
          >
            <img 
              src="/images/icons/icon-128.png" 
              alt="ARGON Icon" 
              style={{ width: "30px", height: "30px" }}
            />
            ARGON
          </a>
        </Text>
        <NavIcon 
          isActive={isMenuOpen} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
        />
      </Flex>
      
      {/* Navigation Menu */}
      {isMenuOpen && (
        <Column 
          ref={menuRef}
          id="main-nav"
          position="fixed"
          right="24"
          padding="m" 
          background="page" 
          border="neutral-alpha-weak"
          radius="m"
          gap="xs"
          style={{ 
            top: "92px",
            zIndex: 999, 
            backdropFilter: "blur(16px)", 
            minWidth: "220px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)"
          }}
        >
          <ToggleButton 
            fillWidth 
            horizontal="start" 
            size="s" 
            href="/"
            weight="default"
            style={{ justifyContent: "flex-start", padding: "12px 16px" }}
          >
            <Text variant="body-default-s" onBackground="neutral-strong">Home</Text>
          </ToggleButton>
          <ToggleButton 
            fillWidth 
            horizontal="start" 
            size="s" 
            href="/features"
            weight="default"
            style={{ justifyContent: "flex-start", padding: "12px 16px" }}
          >
            <Text variant="body-default-s" onBackground="neutral-strong">Features</Text>
          </ToggleButton>
          <ToggleButton 
            fillWidth 
            horizontal="start" 
            size="s" 
            href="/support"
            weight="default"
            style={{ justifyContent: "flex-start", padding: "12px 16px" }}
          >
            <Text variant="body-default-s" onBackground="neutral-strong">Support</Text>
          </ToggleButton>
          
          <ToggleButton 
            fillWidth 
            horizontal="start" 
            size="s" 
            href="https://aryantechie.com/about"
            weight="default"
            style={{ justifyContent: "flex-start", padding: "12px 16px" }}
          >
            <Text variant="body-default-s" onBackground="neutral-strong">About Developer</Text>
          </ToggleButton>
          <Line background="neutral-alpha-weak" marginY="xs" />
          <ToggleButton 
            fillWidth 
            horizontal="start" 
            size="s" 
            href="/privacy"
            weight="default"
            style={{ justifyContent: "flex-start", padding: "12px 16px" }}
          >
            <Text variant="body-default-xs" onBackground="neutral-weak">Privacy Policy</Text>
          </ToggleButton>
          <ToggleButton 
            fillWidth 
            horizontal="start" 
            size="s" 
            href="/terms"
            weight="default"
            style={{ justifyContent: "flex-start", padding: "12px 16px" }}
          >
            <Text variant="body-default-xs" onBackground="neutral-weak">Terms of Service</Text>
          </ToggleButton>
        </Column>
      )}
    </>
  );
}
