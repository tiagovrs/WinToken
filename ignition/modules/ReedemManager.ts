import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ReedemModule = buildModule("ReedemModule", (module) => {

  const reedemManager = module.contract("ReedemManager");

  return { reedemManager };
});

export default ReedemModule;
