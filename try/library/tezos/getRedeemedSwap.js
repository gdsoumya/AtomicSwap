const { ConseilDataClient } = require("conseiljs");
const init = require("./init");
const config = require("../../globalConfig.json");

const parseValue = (e) => {
  const splt = e.parameters.split(" ");
  return {
    ...e,
    parameters: {
      hashedSecret: splt[1],
      secret: splt[2],
    },
  };
};

module.exports = async () => {
  const data = await ConseilDataClient.executeEntityQuery(
    config.tezos.conseilServer,
    "tezos",
    config.tezos.network,
    "operations",
    {
      fields: ["timestamp", "source", "parameters_entrypoints", "parameters"],
      predicates: [
        {
          field: "kind",
          operation: "eq",
          set: ["transaction"],
          inverse: false,
        },
        {
          field: "timestamp",
          operation: "after",
          set: [1597138153958],
          inverse: false,
        },
        { field: "status", operation: "eq", set: ["applied"], inverse: false },
        {
          field: "destination",
          operation: "eq",
          set: ["KT1T92mZgyZZtVqRG1XfyeqDsPbGe66tPFyV"],
          inverse: false,
        },
        {
          field: "parameters_entrypoints",
          operation: "eq",
          set: ["redeem"],
          inverse: false,
        },
      ],
      orderBy: [{ field: "timestamp", direction: "desc" }],
      aggregation: [],
      limit: 1000,
    }
  );
  let swaps = [];
  data.forEach((e) => {
    swaps.push(parseValue(e));
  });
  return swaps;
};

// getReedemedSwap().then(console.log);
