// Config 💠
Blockly.Blocks["gevitech_config"] = {
  init: function () {
    this.jsonInit({
      type: "gevitech_config",
      message0: "Gravitech MQTT Config %1 Host %2 Port %3",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "host",
          check: "String",
          align: "RIGHT",
        },
        {
          type: "input_value",
          name: "port",
          check: "Number",
          align: "RIGHT",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: "",
      helpUrl: "",
    });
  },
};

// Connected Handle 🌐
Blockly.Blocks["gevitech_on_connected"] = {
  init: function () {
    this.jsonInit({
      type: "gevitech_on_connected",
      message0: "Gravitech When Connected %1 %2",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "callback",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 70,
      tooltip: "",
      helpUrl: "",
    });
  },
};

// SubScribe Handle 😀
Blockly.Blocks["gevitech_mqtt_subscribe"] = {
  init: function () {
    this.jsonInit({
      type: "gevitech_mqtt_subscribe",
      message0: "Gravitech Get Action %1 then %2",
      args0: [
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "callback",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 70,
      tooltip: "",
      helpUrl: "",
    });
  },
};

// Get Button SW1 and SW2 📦
Blockly.Blocks["gevitech_get_switch_1"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("./icons/sw12x12.png", 20, 20, "*"))
      .appendField("Gravitech Switch 1");
    this.jsonInit({
      type: "gevitech_get_switch_1",
      output: ["Number", "Boolean"],
      colour: 80,
      tooltip: "",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["gevitech_get_switch_2"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("./icons/sw12x12.png", 20, 20, "*"))
      .appendField("Gravitech Switch 2");
    this.jsonInit({
      type: "gevitech_get_switch_2",
      output: ["Number", "Boolean"],
      colour: 80,
      tooltip: "",
      helpUrl: "",
    });
  },
};

// Publish RealTime 📁
Blockly.Blocks["gevitech_mqtt_publish"] = {
  init: function () {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("./icons/sot23-6_1.png", 20, 20, "*"))
    this.jsonInit({
      type: "gevitech_mqtt_publish",
      message0: "Gravitech Send Data Realtime: %1",
      args0: [
        {
          type: "input_value",
          name: "value",
          check: ["Number"],
          align: "RIGHT",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 10,
      tooltip: "",
      helpUrl: "",
    });
  },
};

// Publish Temp 📈
Blockly.Blocks["gravitech_publish_temp"] = {
  init: function () {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("./icons/sot23-6_1.png", 20, 20, "*"))
    this.jsonInit({
      type: "input_value",
      message0: "Gravitech Send Data Temp : %1",
      args0: [
        {
          type: "input_value",
          name: "value",
          check: ["Number"],
          align: "RIGHT",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 10,
      tooltip: "",
      helpUrl: "",
    });
  },
};

// Publish Light 📉
Blockly.Blocks["gravitech_publish_light"] = {
  init: function () {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("./icons/sot23-6_1.png", 20, 20, "*"))
    this.jsonInit({
      type: "input_value",
      message0: "Gravitech Send Data Light : %1",
      args0: [
        {
          type: "input_value",
          name: "value",
          check: ["Number"],
          align: "RIGHT",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 10,
      tooltip: "",
      helpUrl: "",
    });
  },
};
