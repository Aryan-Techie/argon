"use client";

import {
  Heading,
  Text,
  Column,
  Row,
  Badge,
  Line,
  Icon,
} from "@once-ui-system/core";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

export default function Terms() {
  return (
    <>
      <style jsx>{`
        .hover-underline:hover {
          text-decoration: underline !important;
        }
      `}</style>
      
      <Navigation />

      <Column fillWidth center padding="l" style={{ paddingTop: "120px", minHeight: "100vh" }}>
        <Column maxWidth="m" gap="xl">
          {/* Header */}
          <Column gap="m" align="center" marginBottom="l" horizontal="center">
            <Badge>
              Last Updated: August 8, 2025
            </Badge>
            <Heading variant="display-strong-l" align="center">
              Terms of Service
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-medium" align="center" wrap="balance" style={{ maxWidth: "600px" }}>
              By using ARGON, you agree to these Terms of Service. Please read them carefully before installing or using our Chrome extension.
            </Text>
          </Column>

          {/* Acceptance of Terms */}
          <Column gap="l" padding="l" style={{ 
            background: "var(--neutral-alpha-weak)", 
            borderRadius: "16px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Row gap="m" align="center">
              <Icon name="check" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Acceptance of Terms</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium">
              By downloading, installing, or using ARGON, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our extension.
            </Text>
          </Column>

          {/* Description of Service */}
          <Column gap="l">
            <Row gap="m" align="center">
              <Icon name="rocket" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Description of Service</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium" style={{ marginBottom: "16px" }}>
              ARGON is a productivity-focused Chrome extension designed to help users enhance their digital wellbeing:
            </Text>
            
            <Row gap="l" wrap>
              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="ban" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Website Blocking</Heading>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">Smart site blocking with custom domain filtering and temporary access options</Text>
              </Column>

              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="chart" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Screen Time Tracking</Heading>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">Monitor daily and weekly browsing patterns with detailed analytics</Text>
              </Column>
            </Row>

            <Row gap="l" wrap>
              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="infinity" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Doom Scroll Prevention</Heading>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">Intelligent detection and intervention for excessive scrolling behavior</Text>
              </Column>

              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="clock" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Focus Enhancement</Heading>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">Built-in Pomodoro timer with customizable work and break sessions</Text>
              </Column>
            </Row>

            <Row gap="l" wrap>
              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="heart" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Digital Wellbeing</Heading>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">Health reminders for posture, hydration, eye care, and movement</Text>
              </Column>

              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="shield" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Privacy-First</Heading>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">Clean, intuitive interface with complete local data storage</Text>
              </Column>
            </Row>

            <Text variant="body-default-s" onBackground="neutral-weak" style={{ 
              padding: "12px 16px", 
              background: "var(--accent-alpha-weak)", 
              borderRadius: "8px",
              border: "1px solid var(--accent-border-medium)"
            }}>
              <Icon name="info" size="xs" style={{ marginRight: "8px" }} />
              The extension operates completely locally on your device without requiring internet connectivity for its core functionality.
            </Text>
          </Column>

          {/* Open Source License */}
          <Column gap="l" padding="l" style={{ 
            background: "var(--neutral-alpha-weak)", 
            borderRadius: "16px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Row gap="m" align="center">
              <Icon name="github" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Open Source License</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium">
              ARGON is released under the MIT License, promoting transparency and community collaboration:
            </Text>
            <Column gap="m">
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Public Source Code</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Available at github.com/aroice-hq/argon for review and contribution</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Modification Rights</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">You may use, modify, and distribute the software subject to license terms</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Copyright Protection</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Copyright (c) 2025 AROICE - All rights reserved</Text>
                </Column>
              </Row>
            </Column>
          </Column>

          {/* Privacy and Data Protection */}
          <Column gap="l" padding="l" style={{ 
            background: "var(--neutral-alpha-weak)", 
            borderRadius: "16px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Row gap="m" align="center">
              <Icon name="shield" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Privacy and Data Protection</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium">
              ARGON operates as a completely local extension with strong privacy protections:
            </Text>
            <Column gap="m">
              <Row gap="m" align="start">
                <Icon name="storage" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Local Storage Only</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">All data is stored exclusively on your device using Chrome's storage API</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="ban" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">No Data Transmission</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">No user data is transmitted to or stored on external servers</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">No Tracking</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">No analytics, telemetry, or user behavior tracking</Text>
                </Column>
              </Row>
            </Column>
            <Text variant="body-default-s" onBackground="neutral-weak">
              See our <a href="/privacy" style={{ color: "var(--brand-on-background-medium)" }} className="hover-underline">Privacy Policy</a> for comprehensive details.
            </Text>
          </Column>

          {/* Permitted Uses */}
          <Column gap="l">
            <Row gap="m" align="center">
              <Icon name="check" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Permitted Uses</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium" style={{ marginBottom: "16px" }}>
              You may use ARGON for legitimate productivity and wellbeing purposes:
            </Text>
            <Column gap="m">
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Text variant="body-default-m">Personal productivity enhancement and digital wellbeing</Text>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Text variant="body-default-m">Blocking access to distracting websites during work or study</Text>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Text variant="body-default-m">Monitoring and analyzing your own browsing patterns</Text>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Text variant="body-default-m">Setting health reminders and productivity timers</Text>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Text variant="body-default-m">Educational purposes and productivity research</Text>
              </Row>
            </Column>
          </Column>

          {/* Disclaimer & Contact */}
          <Row gap="l" wrap>
            <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="l" background="page" radius="m" border="neutral-alpha-weak">
              <Row gap="s" align="center">
                <Icon name="info" size="m" onBackground="accent-medium" />
                <Heading variant="heading-default-m">Disclaimer of Warranties</Heading>
              </Row>
              <Text variant="body-default-s" onBackground="neutral-weak">
                ARGON is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the extension will be error-free, uninterrupted, or meet your specific requirements.
              </Text>
            </Column>

            <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="l" background="page" radius="m" border="neutral-alpha-weak">
              <Row gap="s" align="center">
                <Icon name="mail" size="m" onBackground="accent-medium" />
                <Heading variant="heading-default-m">Need Help?</Heading>
              </Row>
              <Column gap="xs">
                <Text variant="body-default-s" onBackground="neutral-weak">
                  General: <a href="mailto:admin@aroice.in" className="hover-underline" style={{ color: "inherit", textDecoration: "none" }}>admin@aroice.in</a>
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Support: <a href="mailto:aryan@aroice.in" className="hover-underline" style={{ color: "inherit", textDecoration: "none" }}>aryan@aroice.in</a>
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Website: <a href="https://argon.aroice.in" target="_blank" rel="noopener noreferrer" className="hover-underline" style={{ color: "inherit", textDecoration: "none" }}>argon.aroice.in</a>
                </Text>
              </Column>
            </Column>
          </Row>

          {/* Footer */}
          <Column gap="s" align="center" padding="m" style={{
            background: "var(--neutral-alpha-weak)",
            borderRadius: "12px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Text variant="body-default-s" onBackground="neutral-medium" align="center">
              These Terms of Service are effective as of last updated date and will remain in effect except with respect to any changes in its provisions in the future.
            </Text>
            
          </Column>
        </Column>
      </Column>

      <Footer />
    </>
  );
}
