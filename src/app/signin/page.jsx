"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const SignInPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const form = Object.fromEntries(formData.entries());
  };

  return (
    <div className="mx-auto flex rounded-md mb-20 w-full max-w-md flex-col items-center justify-center gap-6 px-4 bg-white">
      <h4 className="mt-10 font-bold text-2xl sm:text-3xl">Sign In </h4>
      <Form
        className="flex w-96 flex-col  gap-4"
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input className="bg-gray-50" placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input className="bg-gray-50" placeholder="Enter your password" />

          <FieldError />
        </TextField>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="rememberMe"
            id="remember"
            defaultChecked
            className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500"
          />
          <label htmlFor="remember" className="text-sm cursor-pointer">
            Remember Me
          </label>
        </div>

        <div className="">
          <Button className="w-full mb-2" type="submit">
            Login
          </Button>
          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </Form>
      <div className="">
        <p className="text-center font-semibold text-lg mb-3 ">
          Or Sign in with
        </p>
        <Button className="flex justify-center mx-auto mb-6" variant="tertiary">
          <Icon icon="devicon:google" />
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
