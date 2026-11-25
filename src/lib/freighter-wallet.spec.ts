import { getNetworkDisplayName } from "./freighter-wallet";

describe("getNetworkDisplayName", () => {
  it("maps the testnet passphrase to Testnet", () => {
    expect(getNetworkDisplayName("Test SDF Network ; September 2015")).toBe(
      "Testnet",
    );
  });

  it("maps the mainnet passphrase to Mainnet", () => {
    expect(
      getNetworkDisplayName("Public Global Stellar Network ; September 2015"),
    ).toBe("Mainnet");
  });

  it("maps the futurenet passphrase to Futurenet", () => {
    expect(
      getNetworkDisplayName("Test SDF Future Network ; October 2022"),
    ).toBe("Futurenet");
  });

  it("falls back to the raw passphrase for unknown networks", () => {
    expect(getNetworkDisplayName("Some Custom Network ; 2024")).toBe(
      "Some Custom Network ; 2024",
    );
  });
});
