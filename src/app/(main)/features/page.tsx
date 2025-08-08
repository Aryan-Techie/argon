"use client";

import {
  Heading,
  Text,
  Column,
  Row,
  Badge,
  Line,
  Icon,
  Button,
  Particle
} from "@once-ui-system/core";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

export default function Features() {
  return (
    <>
      <Navigation />

      <Column fillWidth center padding="l" style={{ paddingTop: "120px", minHeight: "100vh" }}>
        <Column maxWidth="l" gap="l">
          {/* Header */}
          <Column gap="m" align="center">
            
            <Heading variant="display-strong-l" align="center">
              Powerful Features
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
              Discover ARGON's comprehensive toolkit for productivity, focus, and digital wellness.
            </Text>
          </Column>

          {/* Feature Grid */}
          <Column gap="xl">
            {/* Website Blocking */}
            <Row gap="l" align="start" wrap>
              <Column gap="s" flex="1" style={{ minWidth: "300px" }}>
                <Row gap="m" align="center">
                  <Icon name="ban" size="l" onBackground="brand-medium" />
                  <Heading variant="heading-strong-l">Smart Website Blocking</Heading>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  Block distracting websites with intelligent domain filtering and customizable access controls.
                </Text>
                <Column gap="xs" paddingLeft="m">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Custom domain filtering with wildcards</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Temporary access for limited time periods</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Real-time protection as you browse</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Motivational block pages with productivity stats</Text>
                </Column>
              </Column>
              <Column flex="1" style={{ minWidth: "300px", minHeight: "200px", background: "var(--neutral-alpha-weak)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src="images/screenshots/block.jpg" 
                  alt="Website Blocking Screenshot" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    borderRadius: "12px" 
                  }}
                />
              </Column>
            </Row>

            {/* Screen Time Analytics */}
            <Row gap="l" align="start" wrap>
              <Column flex="1" style={{ minWidth: "300px", minHeight: "200px", background: "var(--neutral-alpha-weak)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src="images/screenshots/screen-time.jpg" 
                  alt="Website Blocking Screenshot" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    borderRadius: "12px" 
                  }}
                />
              </Column>
              <Column gap="s" flex="1" style={{ minWidth: "300px" }}>
                <Row gap="m" align="center">
                  <Icon name="chart" size="l" onBackground="brand-medium" />
                  <Heading variant="heading-strong-l">Screen Time Analytics</Heading>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  Monitor your digital habits with comprehensive analytics and insights.
                </Text>
                <Column gap="xs" paddingLeft="m">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Daily and weekly browsing statistics</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Site-specific time tracking</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Hourly usage patterns and trends</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Top visited websites ranking</Text>
                </Column>
              </Column>
            </Row>

            {/* Doom Scroll Blocker */}
            <Row gap="l" align="start" wrap>
              <Column gap="s" flex="1" style={{ minWidth: "300px" }}>
                <Row gap="m" align="center">
                  <Icon name="infinity" size="l" onBackground="brand-medium" />
                  <Heading variant="heading-strong-l">Doom Scroll Blocker</Heading>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  Break free from endless scrolling with intelligent detection and gentle interventions.
                </Text>
                <Column gap="xs" paddingLeft="m">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Automatic excessive scrolling detection</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Pre-configured social media protection</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Custom site support and configuration</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Intervention statistics and tracking</Text>
                </Column>
              </Column>
              <Column flex="1" style={{ minWidth: "300px", minHeight: "200px", background: "var(--neutral-alpha-weak)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src="images/screenshots/doom.jpg" 
                  alt="Website Blocking Screenshot" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    borderRadius: "12px" 
                  }}
                />
              </Column>
            </Row>

            {/* Pomodoro Timer */}
            <Row gap="l" align="start" wrap>
              <Column flex="1" style={{ minWidth: "300px", minHeight: "200px", background: "var(--neutral-alpha-weak)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src="images/screenshots/pomodoro.jpg" 
                  alt="Website Blocking Screenshot" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    borderRadius: "12px" 
                  }}
                />
              </Column>
              <Column gap="s" flex="1" style={{ minWidth: "300px" }}>
                <Row gap="m" align="center">
                  <Icon name="clock" size="l" onBackground="brand-medium" />
                  <Heading variant="heading-strong-l">Pomodoro Timer</Heading>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  Boost productivity with customizable focus sessions and break management.
                </Text>
                <Column gap="xs" paddingLeft="m">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Customizable work and break durations</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Visual progress with smooth animations</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Session tracking and statistics</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Auto-start options for seamless workflow</Text>
                </Column>
              </Column>
            </Row>

            {/* Digital Wellbeing */}
            <Row gap="l" align="start" wrap>
              <Column gap="s" flex="1" style={{ minWidth: "300px" }}>
                <Row gap="m" align="center">
                  <Icon name="heart" size="l" onBackground="brand-medium" />
                  <Heading variant="heading-strong-l">Digital Wellbeing & Health</Heading>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  Maintain your health with intelligent reminders and wellness tracking.
                </Text>
                <Column gap="xs" paddingLeft="m">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Posture check reminders</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Hydration alerts and water breaks</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Eye care with 20-20-20 rule reminders</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Movement breaks and breathing exercises</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Customizable reminder intervals</Text>
                </Column>
              </Column>
              <Column flex="1" style={{ minWidth: "300px", minHeight: "200px", background: "var(--neutral-alpha-weak)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src="images/screenshots/wellbeing.jpg" 
                  alt="Website Blocking Screenshot" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    borderRadius: "12px" 
                  }}
                />
              </Column>
            </Row>

            {/* Modern UX */}
            <Row gap="l" align="start" wrap>
              <Column flex="1" style={{ minWidth: "300px", minHeight: "200px", background: "var(--neutral-alpha-weak)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                  src="images/screenshots/github.jpg" 
                  alt="Website Blocking Screenshot" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    borderRadius: "12px" 
                  }}
                />
              </Column>
              <Column gap="s" flex="1" style={{ minWidth: "300px" }}>
                <Row gap="m" align="center">
                  <Icon name="shield" size="l" onBackground="brand-medium" />
                  <Heading variant="heading-strong-l">Open Source & Privacy Focused</Heading>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  All data stays local on your device. No tracking, no external servers, no ads.
                </Text>
                <Column gap="xs" paddingLeft="m">
                  <Text variant="body-default-s" onBackground="neutral-weak">• 100% Local Storage</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• No Tracking</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Open source MIT license</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Complete transparency and security</Text>
                </Column>
              </Column>
            </Row>
          </Column>

          {/* CTA Section */}
          <Column gap="m" align="center" marginTop="xl" padding="l" style={{ 
            background: "var(--neutral-alpha-weak)", 
            borderRadius: "16px",
            border: "1px solid var(--neutral-border-medium)",
            position: "relative",
            overflow: "hidden"
          }}>
            
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
              <Particle
                fill
                interactive
                speed={3}
                interactionRadius={100}
                height={32}
              />
            </div>
            
            <div style={{ position: "relative", zIndex: 1 }}>
              <Heading variant="heading-strong-l" align="center">Ready to Transform Your Digital Life?</Heading>
              <Text variant="body-default-m" onBackground="neutral-medium" align="center" wrap="balance">
                Take control of your digital habits and build a healthier relationship with technology.
              </Text>
              
              <Row gap="m" wrap horizontal="center" marginTop="s">
                <Column>
                  <Text variant="body-default-xs" onBackground="neutral-weak" align="center">Add to Chrome</Text>
                  <Text variant="heading-strong-m" onBackground="brand-medium" align="center">Free Forever</Text>
                </Column>
                <Column>
                  <Text variant="body-default-xs" onBackground="neutral-weak" align="center">Setup Time</Text>
                  <Text variant="heading-strong-m" onBackground="brand-medium" align="center">&lt; 2 Minutes</Text>
                </Column>
                <Column>
                  <Text variant="body-default-xs" onBackground="neutral-weak" align="center">No Account</Text>
                  <Text variant="heading-strong-m" onBackground="brand-medium" align="center">Required</Text>
                </Column>
              </Row>
              
              <Column gap="xs" horizontal="center" align="center" marginTop="m">
                <Button
                  id="docs"
                  href="https://chromewebstore.google.com/detail/argon-your-shield-against/nnliabhpkoclcmdmbilkgilphffcmiih"
                  data-border="rounded"
                  weight="strong"
                  prefixIcon="chrome"
                  arrowIcon
                  target="_blank"
                  rel="noopener noreferrer"
                  size="m"
                  variant="primary"
                >
                  Add to Chrome
                </Button>
                
                <Button
                  id="github"
                  href="https://github.com/aroice-hq/argon"
                  data-border="rounded"
                  weight="default"
                  prefixIcon="github"
                  arrowIcon
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="tertiary"
                  size="s"
                >
                  View on GitHub
                </Button>
              </Column>
            </div>
          </Column>
        </Column>
      </Column>

      <Footer />
    </>
  );
}
