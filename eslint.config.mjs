import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  // .claude/ guarda las skills (código de terceros); .taste-skill/, sus capturas.
  { ignores: [".next/**", "out/**", "next-env.d.ts", ".claude/**", ".taste-skill/**"] },
];

export default eslintConfig;
