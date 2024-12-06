import { motion } from "framer-motion";
import { 
  BarChart3, 
  User, 
  Bell,
  Settings,
  LogOut,
  Film,
  Database
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { OccupancyChart } from "@/components/dashboard/OccupancyChart";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const DashboardPage = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$12,345",
      change: "+12%",
      description: "Total revenue across all screens and concessions"
    },
    {
      title: "Average Occupancy",
      value: "75%",
      change: "+5%",
      description: "Average seat occupancy across all screens"
    },
    {
      title: "Active Movies",
      value: "8",
      change: "0",
      description: "Number of movies currently showing"
    },
    {
      title: "Maintenance Alerts",
      value: "2",
      change: "-1",
      description: "Active maintenance requests requiring attention",
      urgent: true,
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-navy">
        {/* Sidebar */}
        <Sidebar className="border-r border-navy-light">
          <SidebarHeader className="p-4 border-b border-navy-light">
            <div className="flex items-center space-x-2">
              <Film className="h-6 w-6 text-gold" />
              <h2 className="text-xl font-bold text-text-primary">Cinema Manager</h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full flex items-center space-x-2 text-text-primary hover:bg-navy-light rounded-lg p-2">
                  <BarChart3 className="h-5 w-5 text-gold" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full flex items-center space-x-2 text-text-secondary hover:bg-navy-light rounded-lg p-2">
                  <Film className="h-5 w-5" />
                  <span>Movies</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full flex items-center space-x-2 text-text-secondary hover:bg-navy-light rounded-lg p-2">
                  <Database className="h-5 w-5" />
                  <span>Reports</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full flex items-center space-x-2 text-text-secondary hover:bg-navy-light rounded-lg p-2">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t border-navy-light mt-auto">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-500 hover:text-red-400 hover:bg-red-500/10"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-navy border-b border-navy-light p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-text-primary">Dashboard Overview</h1>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
                  <Bell className="h-5 w-5" />
                </Button>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary">
                      <User className="h-5 w-5" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-48">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">John Doe</h4>
                      <p className="text-xs text-text-secondary">Cinema Manager</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
          </header>

          <main className="p-6 space-y-6">
            {/* Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {metrics.map((metric) => (
                <HoverCard key={metric.title}>
                  <HoverCardTrigger asChild>
                    <Card className="bg-charcoal border-navy-light hover:bg-charcoal-light transition-colors cursor-pointer">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-text-primary">
                          {metric.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-text-primary">{metric.value}</div>
                        <p className={`text-xs ${
                          metric.change.startsWith('+') 
                            ? 'text-emerald' 
                            : metric.change.startsWith('-') 
                            ? 'text-red-500' 
                            : 'text-text-secondary'
                        }`}>
                          {metric.change} from last week
                        </p>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{metric.title}</h4>
                      <p className="text-xs text-text-secondary">{metric.description}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </motion.div>

            {/* Charts Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-charcoal border-navy-light">
                <CardHeader>
                  <CardTitle className="text-text-primary">Revenue Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <RevenueChart />
                </CardContent>
              </Card>
              <Card className="bg-charcoal border-navy-light">
                <CardHeader>
                  <CardTitle className="text-text-primary">Occupancy Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <OccupancyChart />
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;