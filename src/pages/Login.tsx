
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log(values);
    toast({
      title: "Login Attempted",
      description: "This is a demo. No actual login is performed.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto flex-1 flex flex-col md:flex-row items-center justify-center px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-sm text-brand-blue mb-6 hover:text-brand-darkBlue">
              <ArrowLeft size={16} className="mr-1" />
              Back to home
            </Link>
            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-gray-600">Sign in to your SKUGen account</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
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
                      <div className="relative">
                        <Input 
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••" 
                          {...field} 
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <Link to="#" className="text-sm text-brand-blue hover:text-brand-darkBlue">
                  Forgot password?
                </Link>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-brand-darkBlue"
              >
                Sign In
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-brand-blue hover:text-brand-darkBlue">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        
        <div className="hidden md:block md:w-1/2 px-6">
          <div className="bg-brand-lightBlue/20 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">
              Streamline Your Inventory Management
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-brand-blue/10 p-1 rounded mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Generate unique SKUs and barcodes in seconds</p>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-blue/10 p-1 rounded mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Bulk generation capabilities save hours of manual work</p>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-blue/10 p-1 rounded mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Integrates with popular e-commerce platforms</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
