import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  AlertTriangle,
  Film,
  Calendar,
  Settings,
  LogOut
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

const DashboardPage = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$12,345",
      change: "+12%",
      icon: DollarSign,
    },
    {
      title: "Total Occupancy",
      value: "75%",
      change: "+5%",
      icon: Users,
    },
    {
      title: "Active Movies",
      value: "8",
      change: "0",
      icon: Film,
    },
    {
      title: "Maintenance Alerts",
      value: "2",
      change: "-1",
      icon: AlertTriangle,
      urgent: true,
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-navy">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader className="p-4">
            <h2 className="text-xl font-bold text-gold">Cinema Manager</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full">
                  <BarChart3 className="h-4 w-4" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full">
                  <Film className="h-4 w-4" />
                  <span>Movies</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <Button variant="ghost" className="w-full justify-start text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <Button variant="outline">Customize View</Button>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <Card key={metric.title} className="bg-charcoal text-white">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className={`h-4 w-4 ${metric.urgent ? 'text-red-500' : 'text-gray-400'}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className={`text-xs ${
                      metric.change.startsWith('+') 
                        ? 'text-emerald' 
                        : metric.change.startsWith('-') 
                        ? 'text-red-500' 
                        : 'text-gray-400'
                    }`}>
                      {metric.change} from last week
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-charcoal p-6">
                <CardHeader>
                  <CardTitle className="text-white">Revenue Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <RevenueChart />
                </CardContent>
              </Card>
              <Card className="bg-charcoal p-6">
                <CardHeader>
                  <CardTitle className="text-white">Occupancy Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <OccupancyChart />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;