import { UserAgentProvider } from "../components/providers/userAgentProvider";
import "./globals.css";
import { Layout } from "@/components/layout";
import { headers } from "next/headers";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const userAgent = headers().get("user-agent");
  return (
    <html lang="en">
      <body>
        <UserAgentProvider userAgent={userAgent}>
          <Layout>{children}</Layout>
        </UserAgentProvider>
      </body>
    </html>
  );
};

export default RootLayout;
