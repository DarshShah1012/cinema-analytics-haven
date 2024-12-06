import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      cinemaName: "",
      email: "",
      password: "",
      location: "",
      screens: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // TODO: Implement actual signup logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8 bg-charcoal-light p-8 rounded-xl shadow-xl"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-white/70">Start managing your cinema today</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="cinemaName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cinema Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter cinema name" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Create a password" {...field} />
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
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter cinema location" {...field} />
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
                  <FormLabel>Number of Screens</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter number of screens" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full primary-button">
              Sign Up
            </Button>
          </form>
        </Form>

        <p className="text-center text-white/70">
          Already have an account?{" "}
          <button onClick={() => navigate("/signin")} className="text-gold hover:text-gold-light">
            Sign In
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;