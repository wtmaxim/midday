import { getEmailUrl } from "@midday/utils/envs";
import { Img, Section } from "@react-email/components";

const baseUrl = getEmailUrl();

export function Logo() {
  // CSS-blended version for automatic dark mode adaptation
  return (
    <Section className="mt-[32px]">
      <style>{`
          .logo-blend {
            filter: none;
          }
          
          /* Regular dark mode - exclude Outlook.com */
          @media (prefers-color-scheme: dark) {
            .logo-blend:not([class^="x_"]) {
              filter: invert(1) brightness(1);
            }
          }
          
          /* Outlook.com specific dark mode targeting */
          [data-ogsb] .logo-blend,
          [data-ogsc] .logo-blend,
          [data-ogac] .logo-blend,
          [data-ogab] .logo-blend {
            filter: invert(1) brightness(1);
          }
        `}</style>

      <Img
        src={`${baseUrl}/email/logo.png`}
        width="40"
        height="40"
        alt="Midday"
        className="my-0 mx-auto block logo-blend"
      />
    </Section>
  );
}
