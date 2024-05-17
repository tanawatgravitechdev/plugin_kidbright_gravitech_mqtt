// Config 💠
Blockly.JavaScript["gevitech_config"] = function (block) {
  var value_host =
    Blockly.JavaScript.valueToCode(
      block,
      "host",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || '(char *)"broker.emqx.io"';
  var value_port =
    Blockly.JavaScript.valueToCode(
      block,
      "port",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || "1883";

  var code = `DEV_IO.MQTT().config(${value_host}, ${value_port},"geavitech_${parseInt(
    Math.random() * 1000
  )}","","");\n`;
  return code;
};

// Connected Handle 🌐
Blockly.JavaScript["gevitech_on_connected"] = function (block) {
  var statements_callback = Blockly.JavaScript.statementToCode(
    block,
    "callback"
  );

  var code = `DEV_IO.MQTT().onConnected([]() { ${statements_callback} });\n`;
  return code;
};

// SubScribe Handle 😀
Blockly.JavaScript["gevitech_mqtt_subscribe"] = function (block) {
  var statements_callback = Blockly.JavaScript.statementToCode(
    block,
    "callback"
  );

  var code = `DEV_IO.MQTT().subscribe((char *)"/gravitech_action", []() { ${statements_callback} });\n`;
  return code;
};

// Get Button SW1 and SW2 📦
Blockly.JavaScript["gevitech_get_switch_1"] = function (block) {
  var code = "DEV_IO.MQTT().getNumber() == 1";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["gevitech_get_switch_2"] = function (block) {
  var code = "DEV_IO.MQTT().getNumber() == 2";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Publish RealTime 📁
Blockly.JavaScript["gevitech_mqtt_publish"] = function (block) {
  var value_value =
    Blockly.JavaScript.valueToCode(
      block,
      "value",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || '(char *)""';

  var code = `DEV_IO.MQTT().publish("/gravitech_report", ${value_value});\n`;
  return code;
};

// Publish Temp 📈
Blockly.JavaScript["gravitech_publish_temp"] = function (block) {
  var value =
    Blockly.JavaScript.valueToCode(
      block,
      "value",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || '(char *)""';
  var code = `DEV_IO.MQTT().publish("/gravitech_temp", ${value});\n`;
  return code;
};

// Publish Light 📉
Blockly.JavaScript["gravitech_publish_light"] = function (block) {
  var value =
    Blockly.JavaScript.valueToCode(
      block,
      "value",
      Blockly.JavaScript.ORDER_ATOMIC
    ) || '(char *)""';
  var code = `DEV_IO.MQTT().publish("/gravitech_light", ${value});\n`;
  return code;
};
