import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Film } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  cinemaName: z.string().min(2, "Cinema name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  screens: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 1, {
    message: "Number of screens must be at least 1",
  }),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cinemaName: "",
      email: "",
      password: "",
      location: "",
      screens: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      setError("");
      console.log(data);
      // TODO: Implement actual signup logic
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
    } catch (err) {
      setError("An error occurred during sign up. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-navy">
      <Card className="w-full max-w-2xl my-8 bg-charcoal-light border-navy-light">
        <CardHeader className="text-center space-y-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="mx-auto"
          >
            <Film className="h-12 w-12 text-gold" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white">Create Your Cinema Account</h2>
          <p className="text-gray-400">Join our platform to manage your cinema efficiently</p>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-6">
              {error}
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="cinemaName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Cinema Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter cinema name" className="bg-navy-light" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" className="bg-navy-light" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Password *</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Create a password" className="bg-navy-light" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Location *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter cinema location" className="bg-navy-light" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="screens"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Number of Screens *</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1"
                          placeholder="Enter number of screens" 
                          className="bg-navy-light"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-center mt-8">
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full md:w-auto px-12 primary-button"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </div>
            </form>
          </Form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{" "}
            <button 
              onClick={() => navigate("/signin")} 
              className="text-gold hover:text-gold-light font-medium"
            >
              Sign In
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;