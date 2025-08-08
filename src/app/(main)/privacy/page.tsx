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

export default function Privacy() {
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
              Privacy Policy
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-medium" align="center" wrap="balance" style={{ maxWidth: "600px" }}>
              At ARGON, we take your privacy seriously. This policy outlines how your data is handled when you use our Chrome extension for productivity and digital wellbeing.
            </Text>
          </Column>

          {/* Privacy-First Design */}
          <Column gap="l" padding="l" style={{ 
            background: "var(--neutral-alpha-weak)", 
            borderRadius: "16px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Row gap="m" align="center">
              <Icon name="shield" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Privacy-First Design</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium">
              ARGON is built with privacy as a fundamental principle, not an afterthought:
            </Text>
            <Column gap="m">
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">100% Local Storage</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">All data is stored exclusively on your device using Chrome's local storage API</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">No External Servers</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">No data is ever transmitted to external servers or cloud services</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">No User Tracking</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">No analytics, telemetry, or user behavior tracking of any kind</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">No Accounts Required</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">No registration, login, or account creation needed</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Completely Ad-Free</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">No advertising networks or third-party trackers</Text>
                </Column>
              </Row>
            </Column>
          </Column>

          {/* Data We Store Locally */}
          <Column gap="l">
            <Row gap="m" align="center">
              <Icon name="storage" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Data We Store Locally</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium" style={{ marginBottom: "16px" }}>
              ARGON stores the following information locally on your device. This data never leaves your computer:
            </Text>
            
            <Row gap="l" wrap>
              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="ban" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Website Blocking</Heading>
                </Row>
                <Column gap="xs">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Blocked websites and domains list</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Blocking preferences and settings</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Temporary access permissions</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Custom blocking schedules</Text>
                </Column>
              </Column>

              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="chart" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Screen Time Analytics</Heading>
                </Row>
                <Column gap="xs">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Daily and weekly browsing statistics</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Time spent on individual websites</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Hourly usage patterns and trends</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Top visited websites data</Text>
                </Column>
              </Column>
            </Row>

            <Row gap="l" wrap>
              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="clock" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Productivity Features</Heading>
                </Row>
                <Column gap="xs">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Pomodoro timer sessions and history</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Focus session statistics</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Doom scroll intervention records</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Custom timer durations</Text>
                </Column>
              </Column>

              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="heart" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Digital Wellbeing</Heading>
                </Row>
                <Column gap="xs">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Health reminder preferences</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Posture and hydration alerts</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Eye care reminder settings</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Custom reminder intervals</Text>
                </Column>
              </Column>
            </Row>
          </Column>

          {/* Browser Permissions */}
          <Column gap="l" padding="l" style={{ 
            background: "var(--neutral-alpha-weak)", 
            borderRadius: "16px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Row gap="m" align="center">
              <Icon name="key" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Browser Permissions Required</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium">
              ARGON requires specific browser permissions to function effectively. These permissions are used exclusively for the extension's core functionality:
            </Text>
            <Column gap="m">
              <Row gap="m" align="start">
                <Icon name="storage" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Storage</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">To save your preferences and statistics locally on your device</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="globe" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">WebNavigation</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">To monitor and block distracting websites as you browse</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="window" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Tabs</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">To access current tab information for blocking functionality</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="clock" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Alarms & Notifications</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">To schedule health reminders, productivity timers, and wellbeing alerts</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="code" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Scripting</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">To inject doom scroll detection and intervention scripts on supported websites</Text>
                </Column>
              </Row>
            </Column>
            <Text variant="body-default-s" onBackground="neutral-weak" style={{ 
              padding: "12px 16px", 
              background: "var(--accent-alpha-weak)", 
              borderRadius: "8px",
              border: "1px solid var(--accent-border-medium)"
            }}>
              <Icon name="info" size="xs" style={{ marginRight: "8px" }} />
              These permissions are never used to collect or transmit personal data to external servers.
            </Text>
          </Column>

          {/* Contact */}
          <Column gap="l" padding="l" style={{ 
            background: "var(--neutral-alpha-weak)", 
            borderRadius: "16px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Row gap="m" align="center">
              <Icon name="contact" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Contact Us</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium">
              If you have questions about our Privacy Policy or data practices, we're here to help:
            </Text>
            <Row gap="l" wrap>
              <Column gap="s" flex="1" style={{ minWidth: "250px" }}>
                <Row gap="s" align="center">
                  <Icon name="mail" size="s" onBackground="accent-medium" />
                  <Text variant="body-default-m" weight="strong">Email Support</Text>
                </Row>
                <Column gap="xs">
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    General Inquiries: <a 
                      href="mailto:admin@aroice.in" 
                      style={{ 
                        color: "inherit", 
                        textDecoration: "none",
                        transition: "text-decoration 0.2s ease"
                      }}
                      className="hover-underline"
                    >
                      admin@aroice.in
                    </a>
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Technical Support: <a 
                      href="mailto:aryan@aroice.in" 
                      style={{ 
                        color: "inherit", 
                        textDecoration: "none",
                        transition: "text-decoration 0.2s ease"
                      }}
                      className="hover-underline"
                    >
                      aryan@aroice.in
                    </a>
                  </Text>
                </Column>
              </Column>
              <Column gap="s" flex="1" style={{ minWidth: "200px" }}>
                <Row gap="s" align="center">
                  <Icon name="globe" size="s" onBackground="accent-medium" />
                  <Text variant="body-default-m" weight="strong">Website</Text>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  <a 
                    href="https://argon.aroice.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: "inherit", 
                      textDecoration: "none",
                      transition: "text-decoration 0.2s ease"
                    }}
                    className="hover-underline"
                  >
                    argon.aroice.in
                  </a>
                </Text>
              </Column>
            </Row>
          </Column>

          {/* Footer */}
          <Column gap="s" align="center" padding="m" style={{
            background: "var(--neutral-alpha-weak)",
            borderRadius: "12px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Text variant="body-default-s" onBackground="neutral-medium" align="center">
              This Privacy Policy is effective as of last updated date and will remain in effect except with respect to any changes in its provisions in the future.
            
            </Text>
          </Column>
        </Column>
      </Column>

      <Footer />
    </>
  );
}
