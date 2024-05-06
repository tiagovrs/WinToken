import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { ethers } from "hardhat";
import { ReedemManager, WinToken } from "../typechain-types";

describe("ReedemManager", function () {

  let contract: ReedemManager;
  let winToken: WinToken;

  this.beforeAll(async function () {
    winToken = await ethers.deployContract("WinToken");
    contract = await ethers.deployContract("ReedemManager", [await winToken.getAddress()]);
    console.log("Reedem Address: " + await contract.getAddress());
    console.log("WinToken Address: " + await winToken.getAddress());
  });

  it("Deve liberar permissão ao contrato para gerar tokens", async function () {
    await winToken.grantRole(await winToken.MINTER_ROLE(), contract.getAddress());

    expect(await winToken.hasRole(await winToken.MINTER_ROLE(), contract.getAddress())).to.be.true;
  });

  it("Deve verificar o endereço do contrato", async function () {
    expect(await contract.getAddress()).not.to.be.undefined;
  });

  it('Deve criar um novo reedem', async function () {
    let currentDate = Math.floor(new Date().getTime() / 1000) - 300; // Convertendo milissegundos para segundos e adicionando 300 segundos
    let finalDate = Math.floor((currentDate + 3600) * 1000); // Convertendo para segundos e depois para milissegundos

    await contract.createReedem(currentDate, finalDate, 1000, 100);
    let reedems = await contract.getReedemList();

    expect(reedems).not.to.be.undefined;
  });

  it('Deve resgatar um reedem', async function () {
    const [owner] = await ethers.getSigners();
    let currentDate = Math.floor(new Date().getTime() / 1000) - 300; // Convertendo milissegundos para segundos e adicionando 300 segundos
    let finalDate = Math.floor((currentDate + 3600)); // Convertendo para segundos e depois para milissegundos

    await contract.createReedem(currentDate, finalDate, 1000, 100);
    let reedems = await contract.getReedemList();
    let lastReedem = await contract.getReedemById(reedems.length - 1); 
    await contract.receiveReedem(lastReedem.id, lastReedem.hashKey);

    console.log(await winToken.balanceOf(owner));

    expect(async () => await contract.receiveReedem(lastReedem.id, lastReedem.hashKey)).not.to.throw;
    expect(await winToken.balanceOf(owner)).not.to.equal(0);
  });

  it('Deve disparar um erro ao resgatar um reedem', async function () {
    let currentDate = Math.floor(new Date().getTime() / 1000) - 300; // Convertendo milissegundos para segundos e adicionando 300 segundos
    let finalDate = Math.floor((currentDate + 3600) * 1000); // Convertendo para segundos e depois para milissegundos

    await contract.createReedem(currentDate, finalDate, 1000, 100);
    let reedems = await contract.getReedemList();
    let lastReedem = await contract.getReedemById(reedems.length - 1);
    
    expect(async () => await contract.receiveReedem(lastReedem.id, lastReedem.hashKey)).to.throw;
  });
});
