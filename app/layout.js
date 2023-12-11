import AppContext from "@/context/AppContext";
import "./globals.css";

export const metadata = {
  title: "Loldle Clone",
  description: "Loldle Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center pt-8 backdrop-brightness-50"
        style={{
          backgroundImage:
            'url("https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2f284dbb8704004a/5f2c5622c9ec57071816db63/01_Banner_Pro_Play_Balance.jpg")',
        }}
      >
        <AppContext>{children}</AppContext>
      </body>
    </html>
  );
}
