import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, MobileStepper, useTheme } from "@mui/material";
import { useState } from "react";
import { StyledButton } from "../styles/rightbar";

const quotes = [
  {
    description: `"85% of people posting puppy photos are trying to scam you"`,
  },
  { description: `"Every 39 seconds there is a cyber attack"` },
  { description: `"Human error accounts for 95% of all data breaches"` },
  { description: `"75% of cyber attacks start with an email"` },
  {
    description: `"Data breaches exposed 36 billion records in the first half of 2020"`,
  },
  {
    description: `"4 million files are stolen every day - that’s 44 every single second"`,
  },
  {
    description: `"Email is the primary entry point of 94% of malware attacks. (Verizon)"`,
  },
  {
    description: `"Cyber crime is set to cost $6 trillion in 2021 - twice what it was in 2015"`,
  },
  {
    description: `"The average time to identify a breach in 2021 was 212 days. (IBM)"`,
  },
  {
    description: `"Personal data was involved in 45 percent of breaches in 2021. (Verizon)"`,
  },
  {
    description: `"Security breaches have increased by 11 percent since 2018 and 67 percent since 2014. (Accenture)"`,
  },
  {
    description: `"A 2021 LinkedIn data breach exposed the personal information of 700 million users or about 93 percent of all LinkedIn members. (RestorePrivacy)"`,
  },
  {
    description: `"An attack on Microsoft in March 2021 affected more than 30,000 organizations in the U.S., including businesses and government agencies. (Microsoft)"`,
  },
  {
    description: `"Meat processing company JBS was the victim of a ransomware attack that shut down beef and poultry processing plants on four different continents. (Wall Street Journal)"`,
  },
  {
    description: `"Personal data belonging to more than 100 million Android users was exposed in a 2021 data leak due to misconfigured cloud services. (Check Point)"`,
  },
  {
    description: `"The Equifax breach cost the company more than $4 billion in total. (Time Magazine)"`,
  },
  {
    description: `"In 2020, cybercriminals cloned the voice of a U.A.E. company director to initiate a $35 million bank transfer. (Forbes)"`,
  },
  { description: `"Malware increased by 358 percent in 2020."` },
  {
    description: `"In 2018, an average of 10,573 malicious mobile apps were blocked per day. (Symantec)"`,
  },
  {
    description: `"57 percent of organizations see weekly or daily phishing attempts. (GreatHorn)"`,
  },
  {
    description: `"$17,700 is lost every minute due to a phishing attack. (CSO Online)"`,
  },
  {
    description: `"Also as of February 2022, there are nearly 600,000 job openings in the cybersecurity industry, meaning only 68 percent of open jobs are filled. (Cyber Seek)"`,
  },
];

export default function Carousel() {
  const theme = useTheme();
  const [activeQuote, setActiveQuote] = useState(0);
  const maxQuotes = quotes.length;

  const handleNext = () => {
    setActiveQuote((prevActiveQuote) => prevActiveQuote + 1);
  };

  const handleBack = () => {
    setActiveQuote((prevActiveQuote) => prevActiveQuote - 1);
  };

  return (
    <Box sx={{ maxWidth: 300, justifyContent: "space-between" }}>
      <div sx={{ height: 255, maxWidth: 500, width: "100%", p: 2 }}>
        {quotes[activeQuote].description}
      </div>
      <MobileStepper
        variant="dots"
        quotes={maxQuotes}
        position="static"
        activeQuote={activeQuote}
        sx={{
          background: "transparent",
        }}
        nextButton={
          <StyledButton
            size="small"
            onClick={handleNext}
            disabled={activeQuote === maxQuotes - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </StyledButton>
        }
        backButton={
          <StyledButton
            size="small"
            onClick={handleBack}
            disabled={activeQuote === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </StyledButton>
        }
      />
    </Box>
  );
}
