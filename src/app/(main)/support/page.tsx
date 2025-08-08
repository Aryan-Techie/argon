"use client";

import {
  Heading,
  Text,
  Column,
  Button,
  Row,
  Badge,
  Line,
  Icon,
  Meta,
  Schema,
} from "@once-ui-system/core";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { baseURL, meta } from "@/resources/once-ui.config";

export async function generateMetadata() {
  return Meta.generate({
    title: meta.support.title,
    description: meta.support.description,
    baseURL: baseURL,
    path: meta.support.path,
    canonical: meta.support.canonical,
    image: meta.support.image,
    robots: meta.support.robots,
  });
}

export default function Support() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ARGON Support",
    "description": "Get help with ARGON Chrome extension. Find documentation, report bugs, and contact our support team for assistance.",
    "url": `${baseURL}/support`,
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I install ARGON?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visit the Chrome Web Store, click 'Add to Chrome', confirm installation, pin to toolbar, and configure settings."
          }
        },
        {
          "@type": "Question", 
          "name": "Why isn't ARGON blocking websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Verify the domain is correctly added to your blocked list. Check for typos or missing subdomains."
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact support?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "Email admin@aroice.in for general inquiries or aryan@aroice.in for support. You can also report bugs on GitHub."
          }
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "ARGON",
      "url": baseURL
    }
  };

  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.support.title}
        description={meta.support.description}
        path={meta.support.path}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <style jsx>{`
        .hover-underline:hover {
          text-decoration: underline !important;
        }
      `}</style>
      
      <Navigation />

      <main>
        <Column fillWidth center padding="l" style={{ paddingTop: "120px", minHeight: "100vh" }}>
          <Column maxWidth="m" gap="xl">
            {/* Header */}
            <header>
              <Column gap="m" align="center" marginBottom="l" horizontal="center">
                <Badge>
                  Need Help?
                </Badge>
                <Heading variant="display-strong-l" align="center" as="h1">
                  ARGON Support
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-medium" align="center" wrap="balance" style={{ maxWidth: "600px" }}>
                  Get help with ARGON Chrome extension. Find documentation, report bugs, and contact our support team for assistance.
                </Text>
              </Column>
            </header>

          {/* Quick Actions */}
            <section>
              <Column gap="l" padding="l" style={{ 
                background: "var(--neutral-alpha-weak)", 
                borderRadius: "16px",
                border: "1px solid var(--neutral-border-medium)"
              }}>
            <Row gap="m" align="center" horizontal="center">
              <Icon name="rocket" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l" as="h2">Quick Actions</Heading>
            </Row>
            <Row gap="m" wrap horizontal="center">
              <Button
                href="https://github.com/aroice-hq/argon#readme"
                target="_blank"
                rel="noopener noreferrer"
                prefixIcon="github"
                weight="strong"
              >
                Documentation
              </Button>
              <Button
                href="https://github.com/aroice-hq/argon/issues"
                target="_blank"
                rel="noopener noreferrer"
                weight="default"
                prefixIcon="bug"
              >
                Report Bug
              </Button>
              <Button
                href="mailto:admin@aroice.in?subject=ARGON%20Feedback"
                target="_blank"
                rel="noopener noreferrer"
                weight="default"
                prefixIcon="feedback"
              >
                Feedback
              </Button>
              <Button
                href="https://chromewebstore.google.com/detail/argon-your-shield-against/nnliabhpkoclcmdmbilkgilphffcmiih"
                target="_blank"
                rel="noopener noreferrer"
                prefixIcon="chrome"
                weight="default"
              >
                Chrome Store
              </Button>
            </Row>
          </Column>
          </section>

          {/* Getting Started */}
          <Column gap="l" padding="l" style={{ 
            background: "var(--neutral-alpha-weak)", 
            borderRadius: "16px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Row gap="m" align="center">
              <Icon name="play" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l" as="h2">Getting Started</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium">
              Follow these simple steps to install and configure ARGON:
            </Text>
            <Column gap="m">
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Visit Chrome Web Store</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Navigate to the official ARGON extension page</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Install Extension</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Click "Add to Chrome" and confirm the installation</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Pin to Toolbar</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Pin ARGON to your browser toolbar for easy access</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="check" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Configure Settings</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Click the ARGON icon to start customizing your preferences</Text>
                </Column>
              </Row>
            </Column>
          </Column>

          {/* Features Help */}
          <Column gap="l">
            <Row gap="m" align="center">
              <Icon name="book" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Feature Guide</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium" style={{ marginBottom: "16px" }}>
              Learn how to make the most of ARGON's productivity and wellbeing features:
            </Text>
            
            <Row gap="l" wrap>
              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="ban" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Website Blocking</Heading>
                </Row>
                <Column gap="xs">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Add sites to block via dashboard or context menu</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Use temporary access for brief site visits</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Configure blocking schedules and exceptions</Text>
                </Column>
              </Column>

              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="chart" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Screen Time Analytics</Heading>
                </Row>
                <Column gap="xs">
                  <Text variant="body-default-s" onBackground="neutral-weak">• View daily and weekly browsing statistics</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Track time spent on individual websites</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Analyze productivity patterns and trends</Text>
                </Column>
              </Column>
            </Row>

            <Row gap="l" wrap>
              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="infinity" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Doom Scroll Prevention</Heading>
                </Row>
                <Column gap="xs">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Automatic detection of excessive scrolling</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Gentle interventions to break scroll cycles</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Customizable sensitivity settings</Text>
                </Column>
              </Column>

              <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="m" background="page" radius="m" border="neutral-alpha-weak">
                <Row gap="s" align="center">
                  <Icon name="heart" size="m" onBackground="accent-medium" />
                  <Heading variant="heading-default-m">Digital Wellbeing</Heading>
                </Row>
                <Column gap="xs">
                  <Text variant="body-default-s" onBackground="neutral-weak">• Health reminders for posture and hydration</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Pomodoro timer for focused work sessions</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">• Eye care and movement break alerts</Text>
                </Column>
              </Column>
            </Row>
          </Column>

          {/* Troubleshooting */}
          <Column gap="l" padding="l" style={{ 
            background: "var(--neutral-alpha-weak)", 
            borderRadius: "16px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Row gap="m" align="center">
              <Icon name="wrench" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Troubleshooting</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium">
              Common issues and their solutions:
            </Text>
            <Column gap="m">
              <Row gap="m" align="start">
                <Icon name="info" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Extension Not Working</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Try reloading the page or restarting your browser. Check if the extension is enabled in Chrome settings.</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="info" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Sites Not Blocking</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Verify the domain is correctly added to your blocked list. Check for typos or missing subdomains.</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="info" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Data Not Saving</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Ensure Chrome has sufficient storage space and the extension has proper permissions.</Text>
                </Column>
              </Row>
              <Row gap="m" align="start">
                <Icon name="info" size="s" onBackground="accent-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                <Column gap="xs">
                  <Text variant="body-default-m" weight="strong">Notifications Not Showing</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">Check Chrome's notification permissions for the extension in browser settings.</Text>
                </Column>
              </Row>
            </Column>
          </Column>

          {/* Privacy & Security */}
          <Column gap="l" padding="l" style={{ 
            background: "var(--neutral-alpha-weak)", 
            borderRadius: "16px",
            border: "1px solid var(--neutral-border-medium)"
          }}>
            <Row gap="m" align="center">
              <Icon name="shield" size="l" onBackground="brand-medium" />
              <Heading variant="heading-strong-l">Privacy & Security</Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-medium">
              ARGON prioritizes your privacy with 100% local data storage. All your information stays on your device and is never transmitted to external servers.
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              For complete details, see our <a href="/privacy" style={{ color: "var(--brand-on-background-medium)" }} className="hover-underline">Privacy Policy</a>.
            </Text>
          </Column>

          {/* Contact Support */}
          <Row gap="l" wrap>
            <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="l" background="page" radius="m" border="neutral-alpha-weak">
              <Row gap="s" align="center">
                <Icon name="mail" size="m" onBackground="accent-medium" />
                <Heading variant="heading-default-m">Contact Support</Heading>
              </Row>
              <Text variant="body-default-s" onBackground="neutral-medium" style={{ marginBottom: "8px" }}>
                Need additional help? We're here to assist you:
              </Text>
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

            <Column gap="m" flex="1" style={{ minWidth: "280px" }} padding="l" background="page" radius="m" border="neutral-alpha-weak">
              <Row gap="s" align="center">
                <Icon name="github" size="m" onBackground="accent-medium" />
                <Heading variant="heading-default-m">Open Source</Heading>
              </Row>
              <Text variant="body-default-s" onBackground="neutral-medium" style={{ marginBottom: "8px" }}>
                ARGON is open source and available on GitHub:
              </Text>
              <Column gap="xs">
                <Text variant="body-default-s" onBackground="neutral-weak">• View and contribute to source code</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">• Report bugs and request features</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">• Fork for your own modifications</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">• Review development roadmap</Text>
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
              Still need help? Don't hesitate to reach out to our support team. We're committed to helping you get the most out of ARGON.
            </Text>
            
          </Column>
        </Column>
        </Column>
      </main>

      <Footer />
    </>
  );
}
