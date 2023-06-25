import { Footer } from "@mantine/core";

import { APP_NAME } from "../routing";

export const FooterApp = () => (
  <Footer
    height={60}
    p="md"
    style={{ display: "flex", justifyContent: "center" }}
  >
    © 2023 {APP_NAME}. All rights reserved.
  </Footer>
);
