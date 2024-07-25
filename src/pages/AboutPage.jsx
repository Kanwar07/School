import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import PrincipalMessage from "../baseComponents/PrincipalMessage";
import Mission from "../baseComponents/Mission";
import Vision from "../baseComponents/Vision";
import History from "../baseComponents/History";
import InfraStructureAndFacilities from "../baseComponents/InfraStructureAndFacilities";
import school from "../assets/School.png";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <section>
      <div
        className="relative w-full h-screen flex pt-40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${school})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute flex flex-col items-center text-[#ffffff] px-20 w-full"
        >
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="flex flex-row justify-between items-center mb-10 px-8 bg-[#d3d3d3]/[0.8]">
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="principalMessage">
                Principal's Message
              </TabsTrigger>
              <TabsTrigger value="infrastructureandFacilities">
                Infrastructure and Facilities
              </TabsTrigger>
            </TabsList>
            <TabsContent value="history">
              <History />
            </TabsContent>
            <TabsContent value="vision">
              <Vision />
            </TabsContent>
            <TabsContent value="mission">
              <Mission />
            </TabsContent>
            <TabsContent value="principalMessage">
              <PrincipalMessage />
            </TabsContent>
            <TabsContent value="infrastructureandFacilities">
              <InfraStructureAndFacilities />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
