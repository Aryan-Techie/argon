"use client";

import {
  Heading,
  Text,
  Button,
  Column,
  Row,
  Badge,
  Line,
  LetterFx,
} from "@once-ui-system/core";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <Column fillWidth style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Column fillWidth center padding="l" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          onBackground="neutral-medium"
          vertical="center"
          gap="16"
        >
          <Text variant="label-strong-s">ARGON</Text>
          <Line vert background="neutral-alpha-strong" />
          <Text marginX="4">
            <LetterFx trigger="instant">Your Shield Against Chaos</LetterFx>
          </Text>
        </Badge>

        <img 
          src="/images/icons/icon-512.png" 
          alt="ARGON Icon" 
          style={{ width: "120px", height: "120px", marginTop: "2px"}}
        />

        <Heading variant="display-strong-xl" marginTop="24">
          Your Attention Is Worth Guarding 
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
        >
          A shield for your time, peace, and purpose.
        </Text>
        <Column gap="xs" horizontal="center" align="center">
          <Button
            id="docs"
            href="https://chromewebstore.google.com/detail/argon-your-shield-against/nnliabhpkoclcmdmbilkgilphffcmiih"
            data-border="rounded"
            weight="strong"
            prefixIcon="chrome"
            arrowIcon
            target="_blank"
            rel="noopener noreferrer"
            size="l"
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
            variant="secondary"
            size="s"
          >
            View on GitHub
          </Button>
        </Column>
      </Column>
    </Column>

        <Footer />
      </Column>
    </>
  );
}
