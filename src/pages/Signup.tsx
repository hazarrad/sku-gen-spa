
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

const signupSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  companyName: z.string().optional(),
});

type SignupFormValues = z.infer<typeof signupSchema>;

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      companyName: "",
    },
  });

  const onSubmit = (values: SignupFormValues) => {
    console.log(values);
    toast({
      title: "Account Creation Attempted",
      description: "This is a demo. No actual account is created.",
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
            <h1 className="text-3xl font-bold mb-2">Create your account</h1>
            <p className="text-gray-600">Start generating barcodes and SKUs today</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
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
              
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company name <span className="text-gray-400 text-sm">(Optional)</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Your company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <Link to="#" className="text-brand-blue hover:text-brand-darkBlue">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-brand-blue hover:text-brand-darkBlue">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-brand-darkBlue"
              >
                Create Account
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-brand-blue hover:text-brand-darkBlue">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        
        <div className="hidden md:block md:w-1/2 px-6">
          <div className="bg-brand-lightBlue/20 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-brand-darkBlue mb-4">
              Benefits of Creating an Account
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-brand-blue/10 p-1 rounded mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Save and access your generated SKUs anytime</p>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-blue/10 p-1 rounded mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Access advanced customization options</p>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-blue/10 p-1 rounded mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Connect with your existing inventory systems</p>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-blue/10 p-1 rounded mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Generate detailed reports and analytics</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
