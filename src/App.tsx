// import { Toaster } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { Toaster } from "../src/components/ui/sonner";

import NotFound from "../pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "../src/components/ErrorBoundary";
import { ThemeProvider } from "../src/contexts/ThemeContext";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

/* IMPORT DASHBOARD */
import Dashboard from "../src/admin/Dashboard";
import AdminLogin from "./admin/Adminlogin";

function Router() {
  return (
    <Switch>
      {/* WEBSITE ROUTES */}
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/contact"} component={Contact} />

      {/* ADMIN DASHBOARD ROUTE */}
      <Route path={"/admin-login"} component={AdminLogin} />
      <Route path={"/admin"} component={Dashboard} />

      <Route path={"/404"} component={NotFound} />

      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
