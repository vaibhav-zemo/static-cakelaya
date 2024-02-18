import React from "react";
import Navbar from "../components/Navbar";
import Next from "../components/Next";
import {
  VStack,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const About = () => {
  return (
    <VStack>
      <Navbar />
      <VStack bgColor={"alabaster"} px={24} py={12} gap={12}>
        <VStack bgcolor={"alabaster2"} gap={8}>
          <Heading fontSize={'38px'} fontWeight={'400'}>About Us</Heading>
          <Text
            borderRadius={"24px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            p={12}
            textAlign={"justify"}
            color={"droveGray"}
          >
            We are a bunch of students, currently studying at Kamla Nehru
            Institute of Technology, Sultanpur. One of the problems we observe
            students encounter during a birthday party or some other occasion is
            getting an affordable and delicious cake. Students had to travel for
            about 5-6 km to just get a cake. Few players had a monopoly. They
            gave students cake at a very expensive rate. As they were very well
            aware of the fact, that the student has come 5-6 km far, he/she will
            surely purchase it and try to get back to the hostel as soon as
            possible. To avoid students experiencing such an unlikely scenario,
            we thought of providing a solution for the same problem. Cakeलाया?
            is a start-up based on delivering cakes and other savouries to your
            room at your convenience. All you need is just to take a chill pill,
            enjoy the occasion with your closed ones and let us take care of all
            your cake and zingy needs!
          </Text>
        </VStack>
        <VStack bgcolor={"alabaster2"} gap={8}>
          <Heading fontSize={'38px'} fontWeight={'400'}>Work for Social Cause</Heading>
          <Text
            borderRadius={"24px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            p={12}
            textAlign={"justify"}
            color={"droveGray"}
          >
            For every order you place with us, we donate 5% of the net order
            value to the KOSHISH EDUCATIONAL & WELFARE SOCIETY (an initiative of
            one of the alumni of KNIT). The main aim of the NGO lies in
            imparting and providing the best educational facilities to the ones
            who are less privileged. You can mail us at contact@cakelaya.com, to
            know more about our previous donations to the society. We don't
            charge anything extra for the same, rather from the order you place,
            we just take out 5% of it to donate to the society.
          </Text>
        </VStack>
        <VStack bgcolor={"alabaster2"} gap={8}>
          <Heading fontSize={'38px'} fontWeight={'400'}>Aim & Vision</Heading>
          <Text
            borderRadius={"24px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            p={12}
            textAlign={"justify"}
            color={"droveGray"}
          >
            Our main aim is to solve the cake delivery problems that persist
            currently in Tier 2 and Tier 3 cities. The current marketplace lacks
            efficient players to tackle the problem of cake delivery to your
            doorstep. If there are, they all sell cake at a very expensive rate.
            The prices are over-hiked. Our aim and vision are to address the
            same concern. To tackle this problem, we have tied up with
            small/local bakers/players/vendors in the market itself and there
            will be no role of any big bakers/players/vendors dominating the
            market and exploiting small/local bakers/players/vendors in the
            market. Local bakers/players/vendors will be contacted to deliver
            your orders to you once you place an order. In this way, even the
            small vendors won't be affected and a healthy marketplace
            environment will be developed. We want the customer and shopkeeper
            both get benefit from our services. After the lockdown, where
            several businesses have suffered from heavy losses, digitalisation
            and technology are the way to help them. Pricing is set in such a
            way that even the shopkeeper remains profited as well and students
            get the best and cheapest cake possible in the city. We prefer
            quality over anything. Your health is of utmost priority to us and
            thus all the cakes delivered are freshly baked and prepared within
            15 minutes thereafter the order is placed. Cake forms an important
            and integral part of any occasion and adds flavours to it, be it
            your anniversary, your birthday, your internship party or your
            placement party. All we request from you is to give our services a
            try and emerge with a hassle-free experience. Wouldn't that be
            convenient for all of us, to sit in our room, in our cosy bed, and
            just scan a QR code to get the best quality cake at the lowest
            possible price (and we assure you that!)? Sounds interesting? Right?
            We know, it does!
          </Text>
        </VStack>

        <VStack bgcolor={"alabaster2"} gap={8}>
          <Heading fontSize={'38px'} fontWeight={'400'}>Key Values</Heading>
          <VStack
            borderRadius={"24px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            p={12}
            textAlign={"justify"}
            color={"droveGray"}
          >
            <Text>
              We value each of our customers every time, through premium
              products, services and value for money. We are driven by
              innovation, technology & people-first approach. Our core values
              encroach upon Character, Commitment, Compliance, Doing the Most
              Difficult Task First, Ethics, Fair-Play, Finishing to the End,
              Integrity, Ownership, Persistence, Transparency, and
              Trustworthiness. Compassion: Empathy, Gratitude, Inclusiveness and
              Respect. Customer Centric: Accountability, Customer (External as
              well as Internal i.e. Employees & Partners), Pro- Feedback, and
              Responsiveness. Collective Growth: Community service,
              Cost-Consciousness, Inclusiveness, Profitability, Social
              Responsibility, and Sustainability. Continuous Transformation:
              Adaptability, Agility, Being Devil's Advocate, Collaboration,
              Continuous Improvement, Curiosity, Diversity, Experiment,
              Innovation, Introspection, Resilience, Sharing, and Seeking
              Knowledge.
            </Text>
            <UnorderedList>
              <ListItem>
                Compassion: Empathy, Gratitude, Inclusiveness and Respect.
              </ListItem>
              <ListItem>
                Customer Centric: Accountability, Customer (External as well as
                Internal i.e. Employees & Partners), Pro- Feedback, and
                Responsiveness.
              </ListItem>
              <ListItem>
                Collective Growth: Community service, Cost-Consciousness,
                Inclusiveness, Profitability, Social Responsibility, and
                Sustainability.
              </ListItem>
              <ListItem>
                Continuous Transformation: Adaptability, Agility, Being Devil's
                Advocate, Collaboration, Continuous Improvement, Curiosity,
                Diversity, Experiment, Innovation, Introspection, Resilience,
                Sharing, and Seeking Knowledge.
              </ListItem>
            </UnorderedList>
          </VStack>
        </VStack>
      </VStack>
      <Next />
    </VStack>
  );
};

export default About;
