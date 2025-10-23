import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center py-24 px-4 bg-gradient-subtle">
        <Card className="w-full max-w-md border-2">
          <CardHeader className="space-y-4">
            <Link to="/" className="inline-flex items-center text-primary hover:underline text-sm">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            <CardTitle className="text-3xl font-bold">{t("login.title")}</CardTitle>
            <CardDescription className="text-base">
              {t("login.subtitle")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">{t("login.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-2"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{t("login.password")}</Label>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    {t("login.forgot")}
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-2"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {t("login.submit")}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              {t("login.noAccount")}{" "}
              <Link to="/register" className="text-primary hover:underline font-semibold">
                {t("login.signup")}
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
