module.exports = [{"name":"HelloWorld","description":"A super lame component that says Hello with a custom message.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"\"World\"","computed":false}}},"code":"import React from \"react\";\r\nimport PropTypes from \"prop-types\";\r\n\r\n/** A super lame component that says Hello with a custom message. */\r\nfunction HelloWorld({ message }) {\r\n  return <div>Hello {message}</div>;\r\n}\r\n\r\nHelloWorld.propTypes = {\r\n  /** Message to display */\r\n  message: PropTypes.string\r\n};\r\n\r\nHelloWorld.defaultProps = {\r\n  message: \"World\"\r\n};\r\n\r\nexport default HelloWorld;\r\n","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from \"react\";\r\nimport HelloWorld from \"ps-react/HelloWorld\";\r\n\r\n/** Custom message */\r\nexport default function ExampleHelloWorld() {\r\n  return <HelloWorld message=\"Pluralsight viewers!\" />;\r\n}\r\n"}]}]